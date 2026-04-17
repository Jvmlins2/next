import styles from "./login.module.css"

const Login = () => {
    return(
        <>
          <main id={styles.main}>
            <img src="../imgs/hamburguer_login.png" alt="hamburguer flutuando" />
            <div id={styles.campo_login}>
                <h1>Login</h1>
                <form id={styles.formulario}  action="">
                   <div className={styles.campo_form}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email@exemplo.com" required/>
                   </div>
                   <div className={styles.campo_form}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="********" required/>
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