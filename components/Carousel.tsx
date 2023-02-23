// import { useState } from 'react';
// import styles from '../styles/Carousel.module.css';

// interface CarouselProps {
//   items: Array<{ name: string; image: string }>;
//   className?: string;
// }

// const Carousel = ({ items, className }: CarouselProps) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrevClick = () => {
//     setActiveIndex((activeIndex - 1 + items.length) % items.length);
//   };

//   const handleNextClick = () => {
//     setActiveIndex((activeIndex + 1) % items.length);
//   };

//   return (
//     <div className={`${styles.carousel} ${className}`}>
//       <div className={styles.slide}>
//         <h3>{items[activeIndex].name}</h3>
//         <img src={items[activeIndex].image} alt={items[activeIndex].name} />
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.prev} onClick={handlePrevClick}>
//           &lt;
//         </button>
//         <button className={styles.next} onClick={handleNextClick}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import { useState } from 'react';
import styles from '../styles/Carousel.module.css';

interface CarouselProps {
  items: Array<JSX.Element>;
  className?: string;
}

const Carousel = ({ items, className }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div className={styles.slide}>
        {items[activeIndex]}
      </div>
      <div className={styles.controls}>
        <button className={styles.prev} onClick={handlePrevClick}>
          &lt;
        </button>
        <button className={styles.next} onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
