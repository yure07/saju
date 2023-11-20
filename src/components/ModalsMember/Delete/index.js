import styles from './Delete.module.scss'
import {MdOutlineClose} from 'react-icons/md'

const ModalDelete = ( {close} ) => {
    return(
        <main className={styles.containerBack}>
            <section className={styles.containerInside}>
                <MdOutlineClose onClick={close} className={styles.svgClose}/>
                <div className={styles.content}>
                    <h3>Deseja realmente desligar o membro</h3>
                    <p>Nome Sobrenome Sobrenome Sobrenome</p>
                    <button className={styles.btnConfirm} onClick={close}>Confirmar</button>
                </div>
            </section>
        </main>
    )
}
export default ModalDelete