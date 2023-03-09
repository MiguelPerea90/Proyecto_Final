import axios from "axios";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import style from './CheckoutForm.module.css'

const CheckoutForm = (props) =>{
  const stripe = useStripe();
  const elements = useElements();
  const [errorState, setErrorState] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    setLoading(true);

    try {
      if(!error){
        const {id} = paymentMethod;
  
        const {data}  = await axios.post(`payment/rooms`, {
          id,
          amount: (props.totalPayment * 100),
          description: props.descriptionPayment,
          formData: props.formData
        })
  
        if(!data.error){
          props.reservationResponse(data);
          props.successfulReservation(true);
        }else{
          setErrorState(data.error)
        }
        elements.getElement(CardElement).clear();
        setLoading(false);
      }else{
        setErrorState(error);
      }
    } catch (err) {
      setErrorState(err.message);
    }
  }
  
  return (
    <form className={style.paymentForm}>
      {errorState && <p className={style.errorMessage}>{errorState}</p>}
      <CardElement/>
      <button disabled={!stripe} onClick={handleSubmit} className={style.button}>
        {loading ? "Cargando" : "Reservar"}
      </button>
    </form>
  )
}

export default CheckoutForm;