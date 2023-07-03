import React from 'react';
import styles from '../app/page.module.css'
import { Inter } from '@next/font/google'
import '../app/globals.css'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '@/components/Timeline';
const Roadmap = () => {
  return (
    
     <main className={styles.main}>
      <Head>
        <title>Roadmap ➤ x-edeum</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Motivated people together." />
        <link rel="icon" href="/logo_vector-file.svg" />
      </Head>
      <div className={styles.description}>
        <p>
        XΞDΞUM Roadmap 
        </p>
        <div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Together we build a better future.
          </a>
        </div>
      </div>
 
    <div className={styles.center}>

    <Timeline></Timeline>
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
          <p className={inter.className}>Discover the passion and purpose that drives us, and know that you&rsquo;re in good hands with our commitment to simplify your health journey.</p>
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
            Get to know the compassionate and dedicated team behind, and feel confident in the care you&rsquo;ll receive.
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
  );
}

export default Roadmap;