import Footer from "@/componentes/footer/footer";
import SubHeader from "@/componentes/sub-header/sub-header";
import styles from "./produto.module.css"
import Link from "next/link";
const Produto = () => {
    return(
        <>
            <SubHeader/>
            <main className={styles.main_produto}>
                <article className={`${styles.form} layout_guide`}>
                    <h1>CRIAR PRODUTO</h1>
                    <div className={styles.campo_form}>
                    <label htmlFor="nome">nome do produto</label>
                    <input type="text" name="nome" placeholder="BBQ Especial" required/>
                   </div>
                   <div className={styles.campo_form_descricao}>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada." required/>
                   </div>
                   <div className={styles.campo_form}>
                    <label htmlFor="preco">Preço (R$)</label>
                    <input type="text" name="preco" placeholder="40,00" required/>
                   </div>
                   <div className={styles.campo_form}>
                    <label htmlFor="categoria">Categoria</label>
                    <input type="text" name="categoria" placeholder="Selecione a categoria" required/>
                    <a href="/produto#categoria" className={styles.categoria}>Adicionar Categoria</a>
                   </div>
                   <div className={styles.campo_form}>
                    <label htmlFor="URL">URL da imagem</label>
                    <input type="text" name="imagem" placeholder="https://unsplash.com/pt-br/fotografias/..." required/>
                    <button className={styles.botao_cadastro}>Salvar</button>
                   </div>
                    
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Produto;