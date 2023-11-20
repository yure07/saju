import { Link } from 'react-router-dom'
import {BsPaperclip} from 'react-icons/bs'
import { InputMask } from 'primereact/inputmask';
import styles from './Register.module.scss'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

const RegisterMember = () => {
    return(
        <>
            <Header/>
            <main className={styles.containerMain}>
                <h3>Novo membro</h3>
                <article className={styles.containerForms}>
                    <section className={styles.sectionForm}>
                        <h4>Dados Pessoais</h4>
                        <form className={styles.formPersonal}>
                            <input className={styles.inputFull} type='text' placeholder='Nome'/>
                            <InputMask mask='999-999-999.99' className={styles.inputCPF} type='text' placeholder='CPF'/>
                            <InputMask mask='99999999 99' className={styles.inputRG} type='text' placeholder='RG'/>
                            <InputMask mask='XXX-XX' className={styles.inputSender} type='text' placeholder='Emissor'/>
                            <InputMask mask='99/99/9999' className={styles.inputBorn} type='text' placeholder='Data de nascimento'/>
                            <input className={styles.inputSkin} type='text' placeholder='Raça/Cor'/>
                            <input className={styles.inputGender} type='text' placeholder='Gênero'/>
                            <input className={styles.inputOrientationSex} type='text' placeholder='Orientação Sexual'/>
                            <InputMask mask='(99) 99999-9999' className={styles.inputPhone} type='text' placeholder='Telefone'/>
                            <input className={styles.inputEmail} type='text' placeholder='Email'/>
                            <input className={styles.inputFull} type='text' placeholder='Instituição de Ensino'/>
                            <input className={styles.inputType} type='text' placeholder='Tipo'/>
                            <input className={styles.inputStatus} type='text' placeholder='Status'/>
                        </form>
                    </section>
                    <section className={styles.sectionForm}>
                        <h4>Endereço</h4>
                        <form className={styles.formAddress}>
                            <InputMask mask='99999-999' className={styles.inputCEP} type='text' placeholder='CEP'/>
                            <input className={styles.inputStreet} type='text' placeholder='Rua/Avenida'/>
                            <input className={styles.inputNumber} type='text' placeholder='Número'/>
                            <input className={styles.inputNeighbor} type='text' placeholder='Bairro'/>
                            <input className={styles.inputComplement} type='text' placeholder='Complemento'/>
                        </form>
                        <h4>Dados do SAJU</h4>
                        <form className={styles.formDataSaju}>
                            <InputMask mask='99:99' className={styles.inputEntryDuty} type='text' placeholder='Entrada no plantão'/>
                            <InputMask mask="99:99" className={styles.inputExitDuty} type='text' placeholder='Saída do plantão'/>
                            <InputMask mask='99/99/9999' className={styles.inputEntrySaju} type='text' placeholder='Data de entrada no SAJU'/>
                            <input className={styles.inputTriunvirate} type='text' placeholder='Triunvirato'/>
                        </form>
                        <p>Termo de Adesão <BsPaperclip/> </p>
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

export default RegisterMember