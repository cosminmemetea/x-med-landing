import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
         More time for you. Wait Less, Live More. 
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

      <div className={styles.center}>
   
      </div>

      <div className={styles.grid}>
        <a
          href="/team"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <h2 className={inter.className}>
            X-CREW <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get to know the compassionate and dedicated team behind xMΞD, and feel confident in the care you'll receive.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
           X-MISSION  <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Discover the passion and purpose behind xMΞD, and know that you're in good hands with our commitment to simplify your health journey</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            X-ROUTE <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See how xMΞD is revolutionizing the way you manage your health, and be inspired by our clear vision for the future.
          </p>
        </a>
      </div>

    </main>
  )
}
