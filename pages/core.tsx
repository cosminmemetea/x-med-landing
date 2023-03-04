import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import generic_styles from '../app/page.module.css'
import styles from '../styles/pages/core.module.css'
import { Inter } from '@next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const Core = () =>{
  return (

     <main className={generic_styles.main}>

      <div className={generic_styles.description}>
        <p>
        XΞDΞUM Coding Academy: Where passion meets innovation. 
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
       <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
       >
        <div className={styles.swipItem}>
          <div className={styles.imgBox}>
            <img src={`/imgs/xyndor.jpg`} alt="Slide 1" />
          </div>
          <div className={styles.detail}>
              <h2>Xhann, the Powerhouse Pathfinder</h2>
          </div>
        </div>
        <div className={styles.swipItem}>
          <div className={styles.imgBox}>
            <img src={`/imgs/rsz_serph.jpg`} alt="Slide 1" />
          </div>
          <div className={styles.detail}>
              <h2>Serph, the Techno Titan</h2>
          </div>
        </div>
        <div className={styles.swipItem}>
          <div className={styles.imgBox}>
            <img src={`/imgs/rsz_sun.jpg`} alt="Slide 1" />
          </div>
          <div className={styles.detail}>
              <h2>Sun, the Design Dominator</h2>
          </div>
        </div>
        <div className={styles.swipItem}>
          <div className={styles.imgBox}>
            <img src={`/imgs/rsz_ciap.jpg`} alt="Slide 1" />
          </div>
          <div className={styles.detail}>
              <h2>Al Ciapone, the Cyber Conqueror</h2>
          </div>
        </div>

      </Carousel>

     </main>
  );
}

export default Core;