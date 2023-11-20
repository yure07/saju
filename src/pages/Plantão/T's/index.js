import { useState } from "react";
import { useParams } from "react-router-dom"
import { FiTag } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './Ts.module.scss'

const Ts = () => {
    const {params} = useParams()
    console.log(params)
    console.log(typeof(params))

    return(
        <>
            <Header/>
            <main className={styles.containerMain}>
                <h3>Plantão</h3>
                <section className={styles.infoDutyHeader}>
                     
                    <div>
                        <FiTag/>
                        <h4>TA</h4>
                    </div>
                    <div>
                        <IoIosCalendar/>
                        <h4>Segunda-feira</h4>
                    </div>
                    <div>
                        <LuClock3/>
                        <h4>14:00-17:00</h4>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Ts