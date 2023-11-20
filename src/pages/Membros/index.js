import { useState } from 'react'
import ModalDelete from '../../components/ModalsMember/Delete'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from './Membros.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Membros = () => {
    const [DeleteModal, setDeleteModal] = useState(false)
    return(
        <>
            <Header/>
            <main className={styles.containerBody}>
                <h3>Membros</h3>
                <h4 className={styles.sajuanosMobile}>Sajuanos</h4>
                <h4 className={styles.monitorsMobile}>Monitores</h4>
                <div className={styles.containerSearchMember}>
                    <input type='text' placeholder='Pesquisar membro' className={styles.inputSearch}/>
                    <AiOutlineSearch className={styles.searchMember}/>
                </div>
                <article className={styles.contentBody}>
                    <table>
                        <tr className={styles.mobileTrStyle}>
                            <th className={styles.sajuanos}>Sajuanos</th>
                            <th className={styles.center}>Nome do sajuano</th>
                            <th className={styles.duty}>Plantão</th>
                            <th></th>
                        </tr>
                        <tr className={styles.mobileTrStyle}>
                            <td className={styles.monitor}>Monitores</td>
                            <td className={styles.onlyMobile}>Nome do sajuano</td>
                            <td className={styles.center}>Aome Sobrenome Sobrenome Sobrenome</td>
                            <td className={styles.rightDutyTime}>23:59-11:59</td>
                            <td className={styles.right}> 
                                <button className={styles.btnTable}> <Link to="/membros/ver-mais"> Ver mais </Link> </button> 
                                <button className={styles.btnTable} onClick={() => setDeleteModal(true)}>Desligar</button>    
                            </td>
                        </tr>
                        <tr className={styles.mobileTrStyle}>
                            <td></td>
                            <td className={styles.onlyMobile}>Nome do sajuano</td>
                            <td className={styles.center}>Aome Sobrenome Sobrenome Sobrenome</td>
                            <td className={styles.rightDutyTime}>23:59-11:59</td>
                            <td className={styles.right}>
                                <button className={styles.btnTable}> <Link to="/membros/ver-mais"> Ver mais </Link> </button> 
                                <button className={styles.btnTable} onClick={() => setDeleteModal(true)}>Desligar</button>    
                            </td>
                        </tr>
                        <tr className={styles.mobileTrStyle}>
                            <td></td>
                            <td className={styles.onlyMobile}>Nome do sajuano</td>
                            <td className={styles.center}>Aome Sobrenome Sobrenome Sobrenome</td>
                            <td className={styles.rightDutyTime}>23:59-11:59</td>
                            <td className={styles.right}> 
                                <button className={styles.btnTable}> <Link to="/membros/ver-mais"> Ver mais </Link> </button> 
                                <button className={styles.btnTable} onClick={() => setDeleteModal(true)}>Desligar</button>    
                            </td>
                        </tr>
                        <tr className={styles.mobileTrStyle}>
                            <td></td>
                            <td className={styles.onlyMobile}>Nome do sajuano</td>
                            <td className={styles.center}>Aome Sobrenome Sobrenome Sobrenome</td>
                            <td className={styles.rightDutyTime}>23:59-11:59</td>
                            <td className={styles.right}>
                                <button className={styles.btnTable}> <Link to="/membros/ver-mais"> Ver mais </Link> </button> 
                                <button className={styles.btnTable} onClick={() => setDeleteModal(true)}>Desligar</button>    
                            </td>
                        </tr>
                    </table>
                    
                </article>
                <button className={styles.btnNewMember}> <Link to="/membros/novo">Novo membro</Link> </button>
                {DeleteModal && <ModalDelete close={() => setDeleteModal(!DeleteModal)}/>}
            </main>
            <Footer/>
        </>
    )
}

export default Membros