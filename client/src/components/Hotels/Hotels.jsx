import React from "react";
import { useParams } from "react-router-dom";

const Hotels = () => {

    const params = useParams()

    const dataHotels = [
        {
          "id": 456,
          "image": "https://www.worldatlas.com/upload/94/49/83/cancun-mexico-jdross75.jpg",
          "name": "Cancun",
          "popularity": 5,
          "hotels": [
            {
              "id": "f6b1c800-1e8b-447f-b89d-b41404eeed24",
              "image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/df/fc/86/getlstd-property-photo.jpg",
              "name": "Luna Líquida Hotel Boutique",
              "services": null,
              "description": null,
              "rating": 4.8,
              "category": "Economic"
            },
            {
              "id": "632f2b5f-612c-41bd-b622-c1864002d956",
              "image": "https://destify.com/wp-content/uploads/2022/07/Dreams-Villamagna1gal-scaled.jpg",
              "name": "Wyndham Alltra Riviera Nayarit All-Inclusive Resort",
              "services": null,
              "description": null,
              "rating": 4.7,
              "category": "Economic"
            },
            {
              "id": "20e86e08-a842-438c-9c2a-f070587dc60e",
              "image": "https://thegetitdonerealtor.com/wp-content/uploads/2021/06/BH_Condominios.jpeg",
              "name": "Blue Horizon Residences",
              "services": null,
              "description": null,
              "rating": 4.6,
              "category": "Regular"
            },
            {
                "id": "f6b1c800-2c8b-447f-b89d-b41404eeed89",
                "image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/df/fc/86/getlstd-property-photo.jpg",
                "name": "Hotel Boutique",
                "services": null,
                "description": null,
                "rating": 4.8,
                "category": "Economic"
            },
            {
                "id": "642f2b5f-612c-41bd-b622-c1864002d864",
                "image": "https://destify.com/wp-content/uploads/2022/07/Dreams-Villamagna1gal-scaled.jpg",
                "name": "Alltra Riviera",
                "services": null,
                "description": null,
                "rating": 4.7,
                "category": "Economic"
            },
            {
                "id": "20e86e08-a842-588c-9c2a-f070587dc60e",
                "image": "https://thegetitdonerealtor.com/wp-content/uploads/2021/06/BH_Condominios.jpeg",
                "name": "Residences",
                "services": null,
                "description": null,
                "rating": 4.6,
                "category": "Regular"
            }
          ]
        },
        {
            "id": 123,
            "image": "https://global-uploads.webflow.com/5cf16f74881a650c03c2f354/5ea5efe3dddc5f628e90f9e8_313993_2400x1600.jpg",
            "name": "Puerto Vallarta",
            "popularity": 5,
            "hotels": [
              {
                "id": "2730e89f-0192-44bd-98b7-f804d4231e53",
                "image": "https://images.trvl-media.com/lodging/25000000/24940000/24930700/24930665/dd9bb45d.jpg?impolicy=resizecrop&rw=455&ra=fit",
                "name": "The Hacienda at Krystal Altitude Vallarta",
                "services": null,
                "description": null,
                "rating": 4.9,
                "category": "VIP"
              },
              {
                "id": "0328e099-6715-4bc3-89a8-6b8c5d4aafdc",
                "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/64000000/63860000/63854800/63854757/7999752c_b.jpg",
                "name": "Secrets Bahia Mita Surf & Spa - Adults Only - All Inclusive",
                "services": null,
                "description": null,
                "rating": 4.5,
                "category": "Regular"
              },
              {
                "id": "ec91ac2b-a7fd-4601-aff4-531650099970",
                "image": "https://images.trvl-media.com/lodging/1000000/530000/528800/528713/fc80b392.jpg?impolicy=resizecrop&rw=455&ra=fit",
                "name": "Villa del Palmar Beach Resort and Spa, Puerto Vallarta",
                "services": null,
                "description": null,
                "rating": 5,
                "category": "VIP"
              }
            ]
        },
        {
            "id": 789,
            "image": "https://i1.wp.com/www.viajeroazul.com/wp-content/uploads/2018/09/playa-paraiso-viajero-azul.jpg?fit=1024%2C614&ssl=1",
            "name": "Playa Paraíso, Tulum",
            "popularity": 5,
            "hotels": [
              {
                "id": "11199acc-62e7-4094-ae2c-347eac2598e8",
                "image": "https://th.bing.com/th/id/OIP.ycqWfv8O2Zcj2IH4EHpK3AHaE8?pid=ImgDet&rs=1",
                "name": "Villa La Estancia Beach Resort & Spa Riviera Nayarit - All Inclusive",
                "services": null,
                "description": null,
                "rating": 4,
                "category": "Economic"
              },
              {
                "id": "05813482-ebac-475a-8679-7bc82931c2ce",
                "image": "https://storage.googleapis.com/cloudaio/images/hotel/7258ec5c-dc8f-4df8-a2a9-095d42efea87/36818/DRPMI-EXT-PC-Beach-Club-Roof2-RNDR-458x305.jpg",
                "name": "Dreams Bahia Mita Surf & Spa - All Inclusive",
                "services": null,
                "description": null,
                "rating": 4,
                "category": "Regular"
              },
              {
                "id": "660cf874-32cd-441e-b2aa-debe0b265957",
                "image": "https://images.trvl-media.com/hotels/38000000/37810000/37804900/37804877/b9978bc0_z.jpg",
                "name": "The Paramar Beachfront Boutique Hotel With Breakfast Included - Downtown Malecon",
                "services": null,
                "description": null,
                "rating": 5,
                "category": "VIP"
              }
            ]
        }
    ]
   
    const cityHotel = dataHotels.filter(e => e.name === params.city)
    return (
        <div>
            <h1>Componente Hoteles</h1>
            {cityHotel.map((element) => {
              return element.hotels.map((hotel) => {
                  return(
                    <div key={hotel.id}>
                      <p>{hotel.name}</p>
                      <p>{hotel.image}</p>
                      <p>{hotel.rating}</p>
                      <p>{hotel.description}</p>
                    </div>
                  )
                })
            })}         
       </div>
    )
};

export default Hotels;