import styles from './Header.module.scss'
import logo from '../../assets/logo saju branca 2.svg'
import { Link } from 'react-router-dom'
import {TfiMenu} from 'react-icons/tfi'

const Header = () => {
    return(
        <header className={styles.headerContainer}>
            <Link to="/"><img src={logo} alt='logo-white'/></Link>
            <nav className={styles.navLinks}>
                <Link to="/membros">Membros</Link>
                <Link to="/plantao">Plantão</Link>
                <a>Comissão</a>
                <a>Ficha de Presença</a>
                <a>Triunvirato</a>
                <a>Assistido</a>
                <a>NAJUP</a>
                <a>Relatórios</a>
            </nav>
            <TfiMenu/>
        </header>
    )
}
export default Header