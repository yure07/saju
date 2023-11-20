import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './SeeMore.module.scss'
import { Link } from "react-router-dom"

const SeeMoreMember = () => {
    return(
        <>
            <Header/>
            <main className={styles.containerMain}>
                <h3>Nome Sobrenome Sobrenome Sobrenome</h3>
                <article className={styles.containerForms}>
                    <section className={styles.sectionForm}>
                        <h4>Dados Pessoais</h4>
                        <form className={styles.formPersonal}>
                            <label className={styles.inputFull}>
                                <span>Nome</span>
                                <input type="text" placeholder="Nome Sobrenome Sobrenome"/>
                            </label>
                            <label className={styles.inputCpf}>
                                <span>CPF</span>
                                <input type="text" placeholder="000.000.000-00"/>
                            </label>
                            <label className={styles.inputRg}>
                                <span>RG</span>
                                <input type="text" placeholder="00.000.000-00"/>
                            </label>
                            <label className={styles.inputSender}>
                                <span>Emissor</span>
                                <input type="text" placeholder="SSP-BA"/>
                            </label>
                            <label className={styles.inputBorn}>
                                <span>Data de nascimento</span>
                                <input type="text" placeholder="00/00/0000"/>
                            </label>
                            <label className={styles.inputSkinColor}>
                                <span>Raça/Cor</span>
                                <input type="text" placeholder="Branco"/>
                            </label>
                            <label className={styles.inputGender}>
                                <span>Gênero</span>
                                <input type="text" placeholder="Feminino"/>
                            </label>
                            <label className={styles.inputOrientationSex}>
                                <span>Orientação Sexual</span>
                                <input type="text" placeholder="Homossexual"/>
                            </label>
                            <label className={styles.inputPhone}>
                                <span>Telefone</span>
                                <input type="text" placeholder="(71) 99999-0000"/>
                            </label>
                            <label className={styles.inputEmail}>
                                <span>Email</span>
                                <input type="text" placeholder="email@email.com.br"/>
                            </label>
                            <label className={styles.inputFull}>
                                <span>Instituição de Ensino</span>
                                <input type="text" placeholder="UFBA"/>
                            </label>
                            <label className={styles.inputType}>
                                <span>Tipo</span>
                                <input type="text" placeholder="Sajuano"/>
                            </label>
                            <label className={styles.inputStatus}>
                                <span>Status</span>
                                <input type="text" placeholder="Ativo"/>
                            </label>
                        </form>
                    </section>
                    <section className={styles.sectionForm}>
                        <h4>Endereço</h4>
                        <form className={styles.formAddress}>
                            <label className={styles.inputCep}>
                                <span>CEP</span>
                                <input type="text" placeholder="40000-000"/>
                            </label>
                            <label className={styles.inputStreet}>
                                <span>Rua/Avenida</span>
                                <input type="text" placeholder="Rua X"/>
                            </label>
                            <label>
                                <span>Número</span>
                                <input type="text" placeholder="000"/>
                            </label>
                            <label className={styles.inputNeighbor}>
                                <span>Bairro</span>
                                <input type="text" placeholder="Centro"/>
                            </label>
                            <label>
                                <span>Complemento</span>
                                <input type="text" placeholder="Casa"/>
                            </label>
                        </form>
                        <h4>Dados do SAJU</h4>
                        <form className={styles.formDataSaju}>
                            <label className={styles.inputEntryDuty}>
                                <span>Entrada no plantão</span>
                                <input type="text" placeholder="08:00"/>
                            </label>
                            <label className={styles.inputExitDuty}>
                                <span>Saída do plantão</span>
                                <input type="text" placeholder="16:00"/>
                            </label>
                            <label className={styles.inputEntryDuty}>
                                <span>Data de entrada no SAJU</span>
                                <input type="text" placeholder="01/01/2023"/>
                            </label>
                            <label>
                                <span>Triunvirato</span>
                                <input type="text" placeholder="1"/>
                            </label>
                        </form>
                    </section>
                </article>
                <article className={styles.containerComissions}>
                    <h4>Comissões</h4>
                    <section className={styles.containerContents}>
                       <div className={styles.content}>
                            <h5>Comunicação</h5>
                            <p>De: 01/01/2023</p>
                            <p>Até: 01/07/2023</p>
                        </div> 
                       <div className={styles.content}>
                            <h5>Software</h5>
                            <p>De: 01/01/2023</p>
                            <p>Até: o momento</p>
                        </div> 
                    </section>
                    <button className={styles.btnEdit}> <Link to="/membros/editar"> Editar informações </Link> </button>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default SeeMoreMember