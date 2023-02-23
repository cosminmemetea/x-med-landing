import { useState } from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  name: string;
  frontImage: string;
  backImage: string;
  className?: string;
}

const Card = ({ name, frontImage, backImage, className }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.card} ${className}`} onClick={handleClick}>
      <div className={`${styles.face} ${styles.front}`}>
        <img src={isFlipped ? backImage : frontImage} alt={name} />
        <div className={styles.title}>{name}</div>
      </div>
    </div>
  );
};

export default Card;
