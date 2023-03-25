This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Color Scheme 
60 black #000000
30 white #FFFFFF
10 #8DEBF6  21A8F4


#192ABF
#21A8F4

Image size for the caroucel : 584x712


Roadmap for X-MED Medical System Navigation Application

Phase 1: Pre-Development (Month 1-3)

1. Assemble a core team of developers and designers.
2. Develop and implement a comprehensive training program for the team.
3. Conduct market research to identify user needs and competition.
4. Create a detailed project plan, including timelines and milestones.
5. Secure necessary funding and resources.

Phase 2: Development (Month 4-18)

1. Develop the core functionality of the X-MED medical system navigation application.
2. Implement AI, blockchain, cloud computing, and IoT technologies to optimize the user experience.
3. Conduct rigorous testing and debugging to ensure the reliability and security of the application.
4. Continuously improve the application based on user feedback and emerging technologies.
5. Develop partnerships with healthcare institutions to integrate the X-MED application into their systems.

Phase 3: Launch and Growth (Month 19-24)

1. Launch the X-MED application to the public.
2. Conduct an aggressive marketing campaign to increase adoption.
3. Monitor user feedback and continuously improve the application based on feedback.
4. Expand the reach of the application by partnering with healthcare institutions globally.
5. Explore new opportunities to leverage emerging technologies and improve the X-MED application.

What I need: timeline with scroll indicator. With a spin and fade in effect for each point in milestone.
React Timeline in nextjs this is what I need Vertical progress bar with bookmarks support


# https://dashboard.godaddy.com/venture?domainName=xedeum.net&bypass=true 

1. https://github.com/rcdexta/react-event-timeline
2. https://github.com/stephane-monnot/react-vertical-timeline
3. https://reactjsexample.com/a-vertical-timeline-component-for-react/
5. https://veysiyildiz.github.io/vertical-timeline-component-for-react/#/
6. https://www.w3schools.com/howto/howto_css_timeline.asp --> this one is preffered maybe fully customizable
7. https://reactjsexample.com/tag/responsive/
8. https://www.w3schools.com/howto/howto_css_flip_card.asp 



---
<VerticalTimeline >
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff'}}
    date="March 2023 - June 2023"
    iconStyle={{ 
 position: 'absolute',
    top: '50%',
    left: '-10px',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#8DEBF6',
    }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Assemble the core team of geat developers and designers</h3>
    <h4 className="vertical-timeline-element-subtitle">Phase 1</h4>

    {/* <p> 1. .</p> */}
    {/* <p> 2.</p>   */}
       {/* 3. Conduct market research to identify user needs and competition.
       4. Create a detailed project plan, including timelines and milestones.
       5. Secure necessary funding and resources.  */}
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2010 - 2011"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Develop and implement a comprehensive training program for the team.</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2008 - 2010"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2006 - 2008"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="April 2013"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="November 2012"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    contentStyle={{ background: '#000', color: '#fff' }}
    date="2002 - 2006"
    // iconStyle={{ 
    //   // position: "absolute",
    //   left: "calc(50% + 22px)",
    //   top: "calc(50% - 40px)",
    //   width: "16px",
    //   height: "16px",
    //   borderRadius: "50%",
    //   backgroundColor: "#8DEBF6"
    // }}
    // icon={<></>}

  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${styles_road.road}`}
    // iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    // icon={<></>}
  />
</VerticalTimeline>
