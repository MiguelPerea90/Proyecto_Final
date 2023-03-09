import styles from "./NavBarfooter.module.css";
import Logo from "../img/logo.jpg"
import { Link } from "react-router-dom";

const NavBarFooter = () => {

  return (
    <div className={styles.navBarFooterContainer}>
        <div className={styles.containerLinks}>
            <a className={styles.links} href="#MejoresPrecios">Mejores Precios</a>
            <a className={styles.links} href="#Recomendados">Recomendados</a>
            <a className={styles.links} href="#AlojamientosVIP">Alojamientos VIP</a>
            <a className={styles.links} href="#Arriba">Arriba</a>
        </div>
        <nav>
            <div className={styles.navBarFooterContainer2}>
                <Link to="/home">
                    <div className={styles.navBarLogo}>
                        <img src={Logo} alt="logo" />
                        <h2>KANE TRAVELS</h2>
                    </div>
                </Link>

                <div className={styles.containerColaboradores}>
                    <h4 className={styles.title}>Colaboradores</h4>
                    <a className={styles.links} href="https://github.com/alexabadp" target="_blank">Alex Abad</a>
                    <a className={styles.links} href="https://github.com/MdcSny" target="_blank">Mariano Caceres</a>
                    <a className={styles.links} href="https://github.com/MiguelPerea90" target="_blank">José Peréa</a>
                    <a className={styles.links} href="https://github.com/AlStark83" target="_blank">Alberto Covarrubias</a>
                    <a className={styles.links} href="https://github.com/krlosw9" target="_blank">Carlos Waldo</a>
                    <a className={styles.links} href="#" target="_blank">Andres Rios</a>
                </div>

                <div className={styles.copyright}>
                    <span className={styles.texto}>Copyright © 2023 - WebFt-33a</span> <br />
                   <span className={styles.texto}> Grupo 13 Henry.</span>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBarFooter;
