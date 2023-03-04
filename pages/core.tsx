import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../app/page.module.css'
import { Inter } from '@next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const Core = () =>{
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

       <Carousel>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
     </main>
  );
}

export default Core;