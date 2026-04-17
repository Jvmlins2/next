import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
              <div id={styles.footer_icons}>
               <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que fica no footer" id={styles.logo_footer} />
                <div id={styles.icons}>
               <a href="">
                <img src="../imgs/tiktok.png" alt="TikTok VH Burguer" />
               </a>

                <a href="">
                <img src="../imgs/face.png" alt="Facebook VH Burguer" />
                </a>

                <a href="">
                <img src="../imgs/insta.png" alt="Instagram VH Burguer" />
                </a>

                <a href="">
                <img src="../imgs/youtube.png" alt="Youtube VH Burguer" />
                </a>
                  </div>
                </div> 
                <hr id={styles.linha}></hr>
                <p id={styles.copyright}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
                 
            </div>
        </footer>
    )
}

export default Footer;