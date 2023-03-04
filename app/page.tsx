import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })


 const Home = () => {
  return (
    
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
        Where passion meets innovation: creating a healthier world. 
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By XΞDΞUM
          </a>
        </div>
      </div>

      {/* <div className={styles.center}> */}
        <div className ={styles.service} >
                  <span className={styles.catInfo}> XΞDΞUM ACADΞMY </span>
                  <span className={styles.cat}>    </span>
                  <div className={styles.media}> 
                  <a
                    href="/core"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <Image className={styles.img}
                       src={`/imgs/ad.gif`} 
                       width={350}
                       height={350}
                       alt=""
                       ></Image>
                  </a>
                  </div>
        </div>
      {/* </div> */}
      <div>
      </div>
      <div className={styles.grid}>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
           MISSION  <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Discover the passion and purpose that drives us, and know that you're in good hands with our commitment to simplify your health journey.</p>
        </a>

        <a
          href="/team"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            PARTNERS <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get to know the compassionate and dedicated team behind, and feel confident in the care you'll receive.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            ROADMAP <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See how we plan to revolutionize the way you manage your health, and be inspired by our clear vision for the future.
          </p>
        </a>
      </div>

    </main>
  )
}
export default Home;