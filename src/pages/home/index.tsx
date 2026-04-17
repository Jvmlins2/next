import Footer from "@/componentes/footer/footer";
import Header from "@/componentes/header/header";
import styles from "./home.module.css";
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
            <section id={styles.destaques}>
                <div id={styles.lanches_destaque}>
                    <img src="../imgs/mais_pedidos.png" alt="" />
                    <img src="../imgs/muito_bacon.png" alt="" />
                    <img src="../imgs/super_combos.png" alt="" />
                </div>
            </section>
            <section id={styles.cardapio}>
                <h2>Cardapio</h2>
            </section>
            <section id={styles.unidades}>
                <img src="../imgs/unidade.jpeg" alt="" id={styles.img_unidade}/>
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
            </section>
           </main>
           <Footer/>
        </>
    )
}

export default Home;