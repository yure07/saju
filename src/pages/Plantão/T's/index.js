import { useParams } from "react-router-dom"
import { FiTag } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './Ts.module.scss'

const Ts = () => {
    const {params} = useParams()
    const infoDuty = params.split(',')

    return(
        <>
            <Header/>
            <main className={styles.containerMain}>
                <h3>Plantão</h3>
                <article className={styles.infoDutyHeader}>
                    <section className={styles.tags}>
                        {infoDuty.map((info, index) => (
                            <div key={index}>
                                {index === 0 ? <FiTag/> : index === 1 ? <IoIosCalendar/> : <LuClock3/>}
                                <h4>{info}</h4>
                            </div>
                        ))}
                    </section>
                    <h4>Coordenador: João Carlos Mercês Almeida dos Santos</h4>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Ts