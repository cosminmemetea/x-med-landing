
import React from 'react'
import styles from '../styles/TimelineItem.module.css'
export interface Category {
  tag: string,
  color: string
}

export interface Link {
  url: string,
  text: string
}

export interface TimelineItemProps {
  text: string,
  time: string,
  category: Category,
  link: Link
}

const TimelineItem = (data: TimelineItemProps) => (
  <div className={styles['timeline-item']}>
    <div className={styles['timeline-item-content']}>
      <span className={styles['tag']} style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.time}</time>
      <p>{data.text}</p>
      {data.link &&
      (<a 
        target="_blank" rel="noreferrer">
        {data.link.text}</a>)
      }
      <span className={styles['circle']}></span>
    </div>
  </div>
);

export default TimelineItem;
