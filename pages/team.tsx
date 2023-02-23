import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

import styles from '../styles/Layout.module.css';
import cardStyles from '../styles/Card.module.css';
import carouselStyles from '../styles/Carousel.module.css';

const team = [
  {
    name: 'John Doe',
    frontImage: '/imgs/s1.jpg',
    backImage: '/imgs/s2.jpg'
  },
  {
    name: 'Jane Doe',
    frontImage: '/imgs/s0.jpg',
    backImage: '/imgs/s1.jpg'
  },
  {
    name: 'Bob Smith',
    frontImage: '/imgs/s2.jpg',
    backImage: '/imgs/s1.jpg'
  }
];

const Team = () => {
  return (
     <Layout className={styles.container}>
      <h1>Our Team</h1>
      <Carousel
        items={team.map((member) => (
          <Card
            key={member.name}
            name={member.name}
            frontImage={member.frontImage}
            backImage={member.backImage}
            className={cardStyles.card}
          />
        ))}
        className={carouselStyles.carousel}
      />
    </Layout>
  );
};

export default Team;
