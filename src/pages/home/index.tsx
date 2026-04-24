import Footer from "@/componentes/footer/footer";
import Header from "@/componentes/header/header";
import styles from "./home.module.css";
import ListaProduto from "@/componentes/lista-produto/lista-produto";
//ESTRUTURA PADRÃO!
const Home = () => {
    return (
        <>
           <Header/>
           <main>
            <section id={styles.banner}>
                <h1 id={styles.titulo}>BEM-VINDO AO VH BURGUER</h1>
                <img src="../imgs/foto_de_hamburgueres.png" alt="" id={styles.img_principal}/>
                <div id={styles.botoes_banner}>
                    <button id={styles.chamar_atendente}>
                     <p>Chamar atendente</p>
                    </button>
                    <button id={styles.ver_cardapio}>
                        <p>Ver cardápio</p>
                    </button>
                </div>
            </section>
           <section className={styles.destaques} id="destaques">
                    <div className={`${styles.container_destaques} layout_guide`}>
                        <article className={styles.card_destaque_mais_pedidos}>
                            <p>Os queridinhos da galera</p>
                            <p className={styles.destaque}>mais pedidos</p>
                        </article>
                        <div className={styles.cards_direita}>
                            <article className={styles.card_destaque_muito_bacon}>
                                <p>Lanches com</p>
                                <p className={styles.destaque}>muito bacon</p>
                            </article>
                            <article className={styles.card_destaque_super_combos}>
                                <p>Se tiver muita fome</p>
                                <p className={styles.destaque}>Super combos</p>
                            </article>
                        </div>
                    </div>
                </section>
            <section className={styles.cardapio} id="cardapio">
                    <div className={`${styles.container_cardapio} layout_guide`}>
                        <h2>Cardápio</h2>
                        {/* chamar componente da lista */}
                        <ListaProduto/>
                    </div>
                </section>
            <section className={styles.unidades} id="unidades">
                <img src="../imgs/unidade.jpeg" alt="" id={styles.img_unidade}/>
                <div id={styles.enderecos}>               
                <h2>NOSSAS UNIDADES</h2>             
                <p>
                  Centro – Av. Aurora, 742
                </p>
                <p>
                  Jardim – Av. das Palmeiras, 1280
                </p>
                <p>
                  Norte – Av. Horizonte, 305
                </p>
                <p>
                  Sul – Av. Nova Esperança, 910
                </p>
                </div>
            </section>
           </main>
           <Footer/>
        </>
    )
}

export default Home;