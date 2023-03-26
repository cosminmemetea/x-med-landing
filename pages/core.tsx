import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../app/page.module.css'
import core_styles from '../styles/pages/core.module.css'
import { Inter } from '@next/font/google'
import '../app/globals.css'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
const Core = () =>{
  return (
    
     <main className={styles.main}>
      <Head>
        <title>Core ➤ x-edeum</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Motivated people together." />
        <link rel="icon" href="/logo_vector-file.svg" />
      </Head>
      <div className={styles.description}>
        <p>
        XΞDΞUM Core: Where passion meets innovation. 
        </p>
        <div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Learn, create and innovate with us.
          </a>
        </div>
      </div>
       <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
       >
        <div className={core_styles.swipItem}>
          <div className={core_styles.imgBox}>
            <img src={`/imgs/xyndor.jpg`} alt="Slide 1" />
          </div>
          <div className={core_styles.detail}>
              <h2>Xshann, the Powerhouse Pathfinder</h2>
              <p> </p>             
          </div>
        </div>
        <div className={core_styles.swipItem}>
          <div className={core_styles.imgBox}>
            <img src={`/imgs/rsz_serph.jpg`} alt="Slide 1" />
          </div>
          <div className={core_styles.detail}>
              <h2>Serph, the Techno Titan</h2>
              <p> </p>
          </div>
        </div>
        <div className={core_styles.swipItem}>
          <div className={core_styles.imgBox}>
            <img src={`/imgs/rsz_sun.jpg`} alt="Slide 1" />
          </div>
          <div className={core_styles.detail}>
              <h2>Sun, the Design Dominator</h2>
          </div>
        </div>
        <div className={core_styles.swipItem}>
          <div className={core_styles.imgBox}>
            <img src={`/imgs/rsz_ciap.jpg`} alt="Slide 1" />
          </div>
          <div className={core_styles.detail}>
              <h2>Al Ciapone, the Cyber Conqueror</h2>
              <p> </p>
          </div>
        </div>

      </Carousel>

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
  );
}

export default Core;