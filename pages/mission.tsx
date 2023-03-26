import React from 'react';
import styles from '../app/page.module.css'

import { Inter } from '@next/font/google'
import '../app/globals.css'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
const Mission = () => {
  return (
    
     <main className={styles.main}>
      <Head>
        <title>Mission ➤ x-edeum</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Motivated people together." />
        <link rel="icon" href="logo_vector-file.svg" />
      </Head>
      <div className={styles.description}>
        <p>
        XΞDΞUM Mission: Waiting is over, our technology streamlines healthcare for everyone. 
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
 
    {/* <div className={styles.center}>
    </div> */}

 <div className={styles.grid}>

        <a
          href=""
          className={styles.card}
        //   target="_blank"
        //   rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
           Streamlining Healthcare with AI and Blockchain<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Our AI-powered blockchain platform streamlines healthcare by reducing patient wait times. With a user-friendly mobile app, patients receive estimated wait times and can reserve their spot in line. Hospitals receive real-time data and can allocate resources efficiently.</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Enhancing Patient Experience and Efficiency<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Our solution saves time and money for both patients and medical institutions. Trustworthy and secure, our platform ensures patient privacy with end-to-end encryption. AI technology optimizes wait times and reduces overcrowding.          </p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ensuring Trust and Security in Healthcare<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Blockchain ensures secure and transparent data storage. With our innovative solution, medical institutions can improve patient satisfaction and operational efficiency.
          </p>
        </a>
      </div>

       <div className={styles.grid}>

        <a
          href="/mission"
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
          href="/partners"
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
          href="/roadmap"
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

export default Mission;