import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from './Plantao.module.scss'

const Plantao = () => {
    const [paramsLink, setParamsLink] = useState([])
    const navigate = useNavigate()

    const handleClick = (e) => {
        
        // pegar elementos para passar como parametros
        const cardElement = e.currentTarget.querySelector(`.${styles.card}`);
        
        const tsDuty = cardElement.querySelector('h4').innerHTML; 
        const hourDuty = cardElement.querySelector('p').innerHTML;
        const dayDuty = e.currentTarget.firstElementChild.innerHTML

        const paramsToPass = [tsDuty, dayDuty, hourDuty]

        setParamsLink(paramsToPass)
    }

    useEffect(()=> {
        if(paramsLink) navigate(`/plantao/${paramsLink}`)
    },[paramsLink, navigate])

    return(
        <>
            <Header/>
                <main className={styles.containerMain}>
                    <section className={styles.containerHeader}>
                        <h3>Plantão</h3>
                        <button>Novo plantão</button>
                    </section>
                    <article className={styles.containerCards}>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Segunda-feira</h4>
                            <div className={styles.card}>
                                <h4>TA</h4>
                                <a>Ver mais detalhes</a>
                                <p>14:00-17:00</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Terça-feira</h4>
                            <div className={styles.card}>
                                <h4>TB</h4>
                                <a>Ver mais detalhes</a>
                                <p>14:00-17:00</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Terça-feira</h4>
                            <div className={styles.card}>
                                <h4>TC</h4>
                                <a>Ver mais detalhes</a>
                                <p>18:30-20:30</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Quarta-feira</h4>
                            <div className={styles.card}>
                                <h4>TD</h4>
                                <a>Ver mais detalhes</a>
                                <p>14:00-17:00</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Quarta-feira</h4>
                            <div className={styles.card}>
                                <h4>TE</h4>
                                <a>Ver mais detalhes</a>
                                <p>18:30-20:30</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Quinta-feira</h4>
                            <div className={styles.card}>
                                <h4>TF</h4>
                                <a>Ver mais detalhes</a>
                                <p>18:30-20:30</p>
                            </div>
                        </section>
                        <section className={styles.containerCard} onClick={(e) => handleClick(e)}>
                            <h4 className={styles.day}>Sexta-feira</h4>
                            <div className={styles.card}>
                                <h4>TG</h4>
                                <a>Ver mais detalhes</a>
                                <p>14:00-17:00</p>
                            </div>
                        </section>
                    </article>
                </main>
            <Footer/>
        </>
    )
}

export default Plantao