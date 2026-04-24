import Link from "next/link";
import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";

const ListaProduto = () => {
    return(
        <>
         <div id={styles.botoes_home}>
                <button className={styles.botao}>
                    Filtrar
                </button>
                <div id={styles.botoes_direita}>
                    <button className={styles.botao}>Promoções</button>
                    <Link className={styles.botao} href="/produto">Produtos</Link>
                </div>
            </div>
            <div id={styles.cards_produtos}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>
        </>
    )
}

export default ListaProduto