import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Landing.module.css"
import VIP1 from "./img/VIP1.jpeg"
import VIP2 from "./img/VIP2.jpeg"
import VIP3 from "./img/VIP3.jpeg"
import Recomendado1 from "./img/Recomendado1.jpeg"
import Recomendado2 from "./img/Recomendado2.jpeg"
import Recomendado3 from "./img/Recomendado3.jpeg"
import MejoresPrecios1 from "./img/MejoresPrecios1.jpeg"
import MejoresPrecios2 from "./img/MejoresPrecios2.jpeg"
import MejoresPrecios3 from "./img/MejoresPrecios3.jpeg"
import Actividad1 from "./img/Actividad1.jpeg"
import Actividad2 from "./img/Actividad2.jpeg"
import Actividad3 from "./img/Actividad3.jpeg"
import Actividad4 from "./img/Actividad4.jpeg"
import Actividad5 from "./img/Actividad5.jpeg"
import Actividad6 from "./img/Actividad6.jpeg"
import { Link } from "react-router-dom";
import NavBarFooter from "./NavBarFooter/NavBarFooter";

const Landing = () => {
    return (
        <div>
           <header>
                <section id="Arriba">
                    <NavBar/>
                </section>
           </header>

           <main>
                <div className={styles.containerMain}>
                    <section>
                            <div className={styles.containerHeo}>
                                <div className={styles.containerContent}>
                                    <h1 className={styles.title}>Kane Travels</h1>
                                    <p className={styles.parrafo}>
                                        Reserva ahora y vive una experiencia única.
                                    </p>
                                    <Link to="/home">
                                    <button 
                                        className={styles.homeButton}>
                                        Home
                                    </button>
                            </Link>
                                </div>
                            </div>
                            <div className={styles.containerLinks}>
                               
                                <a className={styles.links} href="#Recomendados">Recomendados</a>

                                <a className={styles.links} href="#MejoresPrecios">Mejores Precios</a>

                                <a className={styles.links} href="#Actividades">Actividades</a>

                                <a className={styles.links} href="#Abajo">Abajo</a>
                            </div>
                    </section>

                    <section>
                            <div className={styles.containerDivs}>
                               <section id="AlojamientosVIP">
                                    <h2>Alojamientos VIP</h2>
                                    <div className={styles.containerDivsVip}>
                                        <div className={styles.divsCarrusel}>
                                            
                                            <img src={VIP1} alt="Img Not Found"/>
                                             
                                            <div className={styles.containerDescription}>
                                               <div className={styles.description}>
                                                <h4>Luna Líquida Hotel Boutique</h4>
                                                    <p className={styles.parrafoHotel}>
                                                        Luna Líquida se encuentra a sólo unos pasos de las mejores playas de México, del tradicional Malecón, la zona turística y otras atracciones de renombre en Puerto Vallarta y la Riviera Nayarit. Arte, música, gastronomía, romance...
                                                    </p>
                                               </div>
                                               <Link to="/home/Cancun/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            {/* <Link to="/home/Puerto Vallarta/hotels"></Link> */}
                                            <img src={VIP2} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>The Hacienda Krystal Vallarta</h4>
                                                    <p className={styles.parrafoHotel}>
                                                        
                                                        Krystal Vallarta Hotel & Resort es un complejo familiar que ofrece planes con todo incluido, ubicado en una playa de la zona hotelera de Puerto Vallarta, a 4 kilómetros del Aeropuerto Internacional Licenciado Gustavo Díaz Ordaz.
                                                    </p>
                                                </div>
                                                <Link to="/home/Puerto Vallarta/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP3} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>The Paramar Beachfront Boutique Hotel</h4>
                                                    <p className={styles.parrafoHotel}>
                                                        En pleno centro de la ciudad, a unos pasos de la playa, se encuentra The Paramar, un exclusivo hotel boutique en Puerto Vallarta.
                                                    </p>
                                                </div>
                                                <Link to="/home/Playa Paraíso, Tulum/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                               </section>

                                <section id="Recomendados">
                                <h2>Recomendados</h2>
                                    <div className={styles.containerDivsRecomendados}>
                                        <div className={styles.divsCarrusel}>
                                        <img src={Recomendado1} alt="Img Not Found"/> 
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>Blue Horizon Residences</h4>
                                                    <p className={styles.parrafoHotel}>
                                                    Blue Horizon Residences Puerto Vallarta ubicado en la hermosa costa sur de Puerto Vallarta. Todos los condominios en Blue Horizon están completamente amueblados con vistas panorámicas del océano.
                                                    </p>
                                                </div>
                                                <Link to="/home/Cancun/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={Recomendado2} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>Secrets Bahia Mita Surf & Spa - Adults Only</h4>
                                                    <p className={styles.parrafoHotel}>
                                                    Secrets Bahia Mita Surf & SPA perfectamente ubicado en la exclusiva zona de Bahía de Banderas cerca de Punta Mita, y Marina Cruz de Huanacaxtle en las playas de arena dorada.
                                                    </p>
                                                </div>
                                                <Link to="/home/Puerto Vallarta/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={Recomendado3} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>Villa La Estancia Beach Resort</h4>
                                                    <p className={styles.parrafoHotel}>
                                                    Experimente la magia de nuestros lujosos resorts, situados en dos de los destinos de playa más increíbles de México. Nuestras amplias suites en Los Cabos y Riviera Nayarit.
                                                    </p>
                                                </div>
                                                <Link to="/home/Playa Paraíso, Tulum/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="MejoresPrecios">
                                    <h2>Mejores Precios</h2>
                                    <div className={styles.containerDivsMejoresPrecios}>
                                        <div className={styles.divsCarrusel}>
                                        <img src={MejoresPrecios1} alt="Img Not Found"/> 
                                        <div className={styles.containerDescription}>
                                            <div className={styles.description}>
                                                <h4>Dreams Bahia Mita Surf & Spa</h4>
                                                <p className={styles.parrafoHotel}>
                                                    Dreams Bahia Mita Surf & Spa te permite disfrutar de una ubicación estupenda en Punta de Mita, en la playa, a menos de 15 minutos en coche de Playa Punta De Mita y Playa Bucerías.
                                                </p>
                                            </div>
                                            <Link to="/home/Playa Paraíso, Tulum/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                            </Link>
                                        </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={ MejoresPrecios2} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>The Hacienda at Krystal Altitude Vallarta</h4>
                                                    <p className={styles.parrafoHotel}>
                                                        El hotel todo incluido The Hacienda at Krystal Altitude Vallarta se encuentra en la hermosa Bahía de Banderas en Puerto Vallarta. Está diseñada para adultos y familias con niños de 13 años en adelante. 
                                                    </p>
                                                </div>
                                                <Link to="/home/Puerto Vallarta/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={MejoresPrecios3} alt="Img Not Found"/>
                                            <div className={styles.containerDescription}>
                                                <div className={styles.description}>
                                                    <h4>Hotel Boutique</h4>
                                                    <p className={styles.parrafoHotel}>
                                                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                    </p>
                                                </div>
                                                <Link to="/home/Cancun/hotels">
                                                    <button className={styles.buttonMoreHotels}>Más Hoteles</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                    </section>

                    <section id="Actividades">
                        <div className={styles.containerDivsActividades}>
                            <h3 className={styles.actividadesTitle}>Actividades Sugeridas</h3>
                            
                            <div className={styles.containerDivsActividades}>
                                
                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad1} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4 className={styles.titleActivities}>Actividades Al Aire Libre</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Cancun/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad2} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Gimnacio</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Playa Paraíso, Tulum/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad3} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Tiro con Arco</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Puerto Vallarta/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad4} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Avistamiento de Ballenas</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Cancun/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad5} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Andar En Bicicleta</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Playa Paraíso, Tulum/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad6} alt="Img Not Found"/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Correr</h4>
                                         <p className={styles.parrafoActividad}>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                        <Link to="/home/Puerto Vallarta/activities">
                                            <button className={styles.buttonMoreHotels}>Más Actividades</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <Link to="/home">
                                <button 
                                className={styles.homeButton2}>
                                    Home
                                </button>
                            </Link>
                        </div>
                    </section>

                </div>
           </main>

           <footer>
                <section id="Abajo">
                    <NavBarFooter /> 
                </section>
           </footer>   

        </div>
    )
}

export default Landing
