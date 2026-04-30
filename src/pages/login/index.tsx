import { useRouter } from "next/router";
import { login } from "../api/authService";
import styles from "./login.module.css";
import {useState} from "react";
import {Bounce, ToastContainer, toast} from 'react-toastify';
const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const router = useRouter();
  const notificacao = (msg:string) => toast(msg);
  const erro = (msg:string) => toast.error(msg);

  async function autenticar(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
    await login(email, senha)
    notificacao("Login bem sucedido")
    setTimeout (() =>{
      router.push("/home");
    },2000)
  }catch(error: any){
    erro("Email ou senha inválidos")
  }
  }
    return(
        <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
         <main id={styles.main}>
            <img src="../imgs/hamburguer_login.png" alt="hamburguer flutuando" />
            <div id={styles.campo_login}>
                <h1>Login</h1>
                <form id={styles.formulario}  action="" onSubmit={autenticar}>
                   <div className={styles.campo_form}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                   </div>
                   <div className={styles.campo_form}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="********" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
                   </div>
                   <a id={styles.esq_senha} href="">Esqueceu sua senha?</a>
                   <button>Entrar</button>
                </form>
            </div>   
          </main>
        </>
    )
}

export default Login;