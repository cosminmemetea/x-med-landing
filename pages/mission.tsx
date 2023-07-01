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
           Improve Patient Experience Reduce Waitings Times<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Empower patients by providing them with a seamless and stress-free hospital experience. By reducing the time patients spend navigating the hospital, we aim to create an environment that is supportive and welcoming, with a focus on patient comfort and satisfaction.</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
           Increase hospital Reputation and Efficiency<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Revolutionize the healthcare industry by improving hospital efficiency and patient outcomes. Our goal is to create a world where hospitals run smoothly and efficiently, with patients receiving the care they need as quickly and easily as possible. By providing real-time navigation assistance, we aim to reduce wait times and streamline the hospital experience.</p>
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
           To build a more secure and trustworthy healthcare ecosystem. We believe that every patient has the right to privacy and that their personal data must be protected. By implementing robust data security measures, we aim to build trust with patients and healthcare providers, and create a more secure and transparent healthcare system for all.
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
          <p className={inter.className}>Discover the passion and purpose that drives us, and know that you&rsquo;re in good hands with our commitment to simplify your health journey.</p>
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
            Get to know the compassionate and dedicated team behind, and feel confident in the care you&rsquo;ll receive.
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