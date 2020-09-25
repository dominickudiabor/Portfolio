import React from 'react';

//header section
export const header = {
  navigation: [
    <span key={1} className="header__sym">
      &lt;
    </span>,
    <span key={2} className="header__name">
      Dominic Kudiabor
    </span>,
    <span key={3} className="header__sym">
      /&gt;
    </span>,
  ],
  headerLinks: [
    {
      id: 1,
      classname: 'header__links',
      route: 'projects',
      link: 'Projects',
    },
    {
      id: 2,
      classname: 'header__links',
      route: 'tech-stack',
      link: 'Tech-Stack',
    },
    {
      id: 3,
      classname: 'header__links',
      route: 'about',
      link: 'About',
    },
    {
      id: 4,
      classname: 'header__links',
      route: 'contact',
      link: 'Contact',
    },
  ],
};

export const home = {
  contactLinks: [
    {
      url: 'https://i.ibb.co/0h3VTyD/link.png',
      name: 'linked in',
      website: 'https://www.linkedin.com/in/dominickudiabor/',
    },
    { url: 'https://i.ibb.co/C0F3GyG/git.png', name: 'github', website: 'https://github.com/dominickudiabor' },
  ],
};

export const techStack = {
  stack: [
    {
      image: require('./assets/icons/sass.png'),
      title: 'Frontend',
      hashtags: ['HTML', 'CSS', 'SASS', 'React', 'Typescript', 'Redux-Saga'],
    },
    {
      image: require('./assets/icons/mongo.png'),
      title: 'Database',
      hashtags: ['MongoDB', 'PostgreSQL', 'Firebase', 'Contentful'],
    },
    { image: require('./assets/icons/node.png'), title: 'Backend', hashtags: ['Express', 'Node'] },
    { image: require('./assets/icons/native.png'), title: 'Mobile', hashtags: ['React Native'] },

    { image: require('./assets/icons/aws.png'), title: 'DevOps', hashtags: ['AWS', 'Docker', 'Github Actions'] },
    { image: require('./assets/icons/jest.png'), title: 'Testing', hashtags: ['Jest', 'Instabul'] },
  ],
  sectionProps: {
    id: 'demos-section',
    classname1: 'tech-stack',
    classname2: 'tech-stack__header',
    classname3: 'tech-stack__line',
    header: 'Tech-Stack',
  },
};
