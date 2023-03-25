import React from 'react';
import TimelineItem, { TimelineItemProps } from './TimelineItem';
import timelineData from './data';
import styles from '../styles/Timeline.module.css';

const Timeline = () => {
  return (
    <div className={styles['timeline-container']}>
      {timelineData.map((item: TimelineItemProps, index: number) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
