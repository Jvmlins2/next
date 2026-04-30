import Footer from "@/componentes/footer/footer"
import SubHeader from "@/componentes/sub-header/sub-header"
import styles from "./categoria.module.css"
import {useState} from "react"
import { cadastrarCategoria } from "../api/categoriaService"
import Link from "next/link"
import { ToastContainer, toast } from "react-toastify"

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("");

    const notificacao = (msg:string) => toast(msg);
      const erro = (msg:string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
          await cadastrarCategoria(categoria);
          notificacao("Cadastro realizado com sucesso");
        }catch(error:any){
            erro(error.message)
        }
        
    }
    return(
        <>
        <ToastContainer/>
          <SubHeader/>
          <main id={styles.categoria}>
             <form action="" id={styles.form} onSubmit={cadastrar}>
                <h1>CRIAR CATEGORIA</h1>
                <div className={styles.cadastro_categoria}>
                <label htmlFor="text">Nome categoria</label>
                <input type="text" name="categoria" placeholder="Premium" required value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                </div>
                <div id={styles.alinharBotoes}>
                            <button id={styles.botaoSalvar}>Salvar</button>
                            <Link href='/produto' id={styles.botaoCancelar}>Cancelar</Link>
                        </div>
             </form>
          </main>
          <Footer/>
        </>
    )
}

export default Categoria;