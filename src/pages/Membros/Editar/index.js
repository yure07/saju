import { Link } from "react-router-dom"
import { InputMask } from 'primereact/inputmask';
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './Edit.module.scss'

const EditMember = () => {
    return(
        <>
            <Header/>
            <main className={styles.containerMain}>
                <h3>Editar membro</h3>
                <article className={styles.containerForms}>
                    <section className={styles.sectionForm}>
                        <h4>Dados pessoais</h4>
                        <form className={styles.formPersonal}>
                        <label className={styles.inputFull}>
                                <span>Nome</span>
                                <input type="text" placeholder="Nome Sobrenome Sobrenome"/>
                            </label>
                            <label className={styles.inputCpf}>
                                <span>CPF</span>
                                <InputMask mask="999.999.999-99" type="text" placeholder="000.000.000-00"/>
                            </label>
                            <label className={styles.inputRg}>
                                <span>RG</span>
                                <InputMask mask="99.999.999-999" type="text" placeholder="00.000.000-00"/>
                            </label>
                            <label>
                                <span>Emissor</span>
                                <InputMask mask="XXX-XX" type="text" placeholder="SSP-BA"/>
                            </label>
                            <label className={styles.inputBorn}>
                                <span>Data de nascimento</span>
                                <InputMask mask="99/99/9999" type="text" placeholder="00/00/0000"/>
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
                                <InputMask mask="(99) 99999-9999" type="text" placeholder="(71) 99999-0000"/>
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
                                <InputMask mask="99999-999" type="text" placeholder="40000-000"/>
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
                                <InputMask mask="99:99" placeholder="08:00"/>
                            </label>
                            <label className={styles.inputExitDuty}>
                                <span>Saída do plantão</span>
                                <InputMask mask="99:99" type="text" placeholder="16:00"/>
                            </label>
                            <label className={styles.inputEntryDuty}>
                                <span>Data de entrada no SAJU</span>
                                <InputMask mask="99/99/9999" type="text" placeholder="01/01/2023"/>
                            </label>
                            <label>
                                <span>Triunvirato</span>
                                <input type="text" placeholder="1"/>
                            </label>
                        </form>
                    </section>
                </article>
                <article className={styles.commissions}>
                    <h4>Comissões</h4>
                    <p>Se for o caso, selecione para inserir o membro em uma ou mais comissões</p>
                    <section className={styles.containerCheckbox}>
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Arquivo</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Capacitação</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Certificados</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Colaboração</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Comunicação</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Estrutura</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Finanças</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Formação</span>
                        </label>
                        
                        <label>
                            <input type='checkbox'/> 
                            <span className={styles.checkmark}></span>
                            <span className={styles.textCheckbox}>Software</span>
                        </label>
                    </section>
                    <section className={styles.areaBtn}>
                        <button><Link to="/membros"> Confirmar </Link></button>
                        <button>Cancelar</button>
                    </section>
                </article>
            </main>
            <Footer/>
        </>
    )
}
export default EditMember