import { useState } from "react";
import { useParams } from "react-router-dom"
import { FiTag } from "react-icons/fi";
import { IoIosCalendar, IoMdTrash } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { TiArrowBack } from "react-icons/ti";
import { MdModeEditOutline, MdAddBox } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './Ts.module.scss'

const Ts = () => {
    const [seeAssistidos, setSeeAssistidos] = useState(false)
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
                <h4 className={styles.triunvirateTitle}>Triunviratos</h4>
                <article className={styles.containerCards}>
                    <section className={styles.detailsTriunvirateCard}>
                        <h4 className={styles.tagTs}>TA-1</h4>
                        <div className={styles.contentCard}>
                            <h6>Sajuanos</h6>
                            <p>Antônio Braga Vale Cunha Guimarães</p>
                            <p>José Azevedo Teixeira da Costa Gonzaga</p>
                            <p>João Brasil Aguiar Delfino Guerreiro</p>
                            <p>Luna Maria Carla da Cruz</p>
                            <p>Márcia Barros de Abreu Dantas Gusmão</p>

                            <h6 className={styles.monitorTitle}>Monitor</h6>
                            <p className={styles.contentMonitor}>Nenhum monitor vinculado</p>

                            {seeAssistidos ? (
                                <>
                                    <h6 className={styles.assistidosTitle}>Assistidos</h6>
                                    <p>Ariadna Violeta Quintana Vasques de Souza</p>
                                    <p> <BsArrowReturnRight/> 0006438-88.2021.8.19.0038</p>
                                    <p>Leandro Sandro Balestero Oliveira Tristão</p>
                                    <p> <BsArrowReturnRight/> 0006438-88.2021.8.19.0038</p>
                                </>
                            ) : 
                            <></>}
                        </div>
                        <div className={styles.areaBtns}>
                            <button 
                            className={styles.btnsCard} 
                            onClick={() => setSeeAssistidos(!seeAssistidos)}>
                                {seeAssistidos ? <> Ver menos </> : <> Ver assistidos </>}</button>
                            <button className={styles.btnsCard}>Editar</button>
                        </div>
                    </section>
                    <section className={styles.detailsTriunvirateCard}>
                        <h4 className={styles.tagTs}>TA-2</h4>
                        <div className={styles.contentCard}>
                            <h6>Sajuanos</h6>
                            <p>Roberto Antônio da Paz</p>
                            <h6 className={styles.monitorTitle}>Monitor</h6>
                            <p>Francisco Campos Alves Júnior</p>
                            <p>OAB: 123456/BA</p>
                        </div>
                        <div className={styles.areaBtns}>
                            <button className={styles.btnsCard}>Ver assistidos</button>
                            <button className={styles.btnsCard}>Editar</button>
                        </div>
                    </section>
                    <section className={styles.detailsTriunvirateCard}>
                        <h4 className={styles.tagTs}>TA-3</h4>
                        <div className={styles.contentCard}>
                            <h6>Sajuanos</h6>
                            <p>Antônio Braga Vale Cunha Guimarães</p>
                            <p>José Azevedo Teixeira da Costa Gonzaga</p>
                            <p>João Brasil Aguiar Delfino Guerreiro</p>
                            <p>Luna Maria Carla da Cruz</p>
                            <p>Márcia Barros de Abreu Dantas Gusmão</p>
                            <h6 className={styles.monitorTitle}>Monitor</h6>
                            <p className={styles.contentMonitor}>Nenhum monitor vinculado</p>
                        </div>
                        <div className={styles.areaBtns}>
                            <button className={styles.btnsCard}>Ver assistidos</button>
                            <button className={styles.btnsCard}>Editar</button>
                        </div>
                    </section>
                    <section className={styles.detailsTriunvirateCard}>
                        <h4 className={styles.tagTs}>TA-4</h4>
                        <div className={styles.contentCard}>
                            <h6>Sajuanos</h6>
                            <p>Antônio Braga Vale Cunha Guimarães</p>
                            <p>José Azevedo Teixeira da Costa Gonzaga</p>
                            <p>João Brasil Aguiar Delfino Guerreiro</p>
                            <p>Luna Maria Carla da Cruz</p>
                            <p>Márcia Barros de Abreu Dantas Gusmão</p>
                            <h6 className={styles.monitorTitle}>Monitor</h6>
                            <p className={styles.contentMonitor}>Nenhum monitor vinculado</p>
                        </div>
                        <div className={styles.areaBtns}>
                            <button className={styles.btnsCard}>Ver assistidos</button>
                            <button className={styles.btnsCard}>Editar</button>
                        </div>
                    </section>
                </article>
                <article className={styles.containerButtons}>
                    <button> <TiArrowBack/> Voltar</button>
                    <button> <MdAddBox/> Adicionar Triunvirato</button>
                    <button> <MdModeEditOutline/> Editar</button>
                    <button> <IoMdTrash/>Excluir</button>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Ts