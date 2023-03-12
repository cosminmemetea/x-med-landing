import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../app/page.module.css'
import { Inter } from '@next/font/google'
import '../app/globals.css'
import Head from 'next/head';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import styles_road from '../styles/Roadmap.module.css'
import 'react-vertical-timeline-component/style.min.css';
const Roadmap = () => {
  return (
    
     <main className={styles.main}>
      <Head>
        <title>XΞDΞUM - ROADMAP</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Motivated people together." />
        <link rel="icon" href="logo_vector-file.svg" />
      </Head>
      <div className={styles.description}>
        <p>
        XΞDΞUM Roadmap 
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           Together we build a better future.
          </a>
        </div>
      </div>
 
    <div className={styles.center}>


<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000', color: '#fff'}}
    date="March 2023 - June 2023"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Pre-Development</h3>
    <h4 className="vertical-timeline-element-subtitle">Phase 1</h4>

    <p >
       <p> Assemble a core team of geat developers and designers. </p>
       <p> Develop and implement a comprehensive training program for the team.</p>
       {/* 3. Conduct market research to identify user needs and competition.
       4. Create a detailed project plan, including timelines and milestones.
       5. Secure necessary funding and resources.  */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="April 2013"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="November 2012"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#000' }}
    icon={<></>}

  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<></>}
  />
</VerticalTimeline>
    </div>

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

export default Roadmap;