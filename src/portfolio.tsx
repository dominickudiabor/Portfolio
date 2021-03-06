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
      route: 'about',
      link: 'About',
    },
    {
      id: 2,
      classname: 'header__links',
      route: 'projects',
      link: 'Projects',
    },
    {
      id: 3,
      classname: 'header__links',
      route: 'tech-stack',
      link: 'Tech-Stack',
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
  socialMedia: [
    { label: 'Github', link: 'https://github.com/dominickudiabor', invert: true },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/dominickudiabor/', invert: false },
    {
      label: 'Resume',
      link:
        'https://assets.ctfassets.net/449mcwf87tn4/4gvnuep6RWXFta1X7Nomgn/f03bbdebcc578f06ce89fdd355429552/Dominic_Travis_Kudiabor__-_Integrify_CV_-_25.09.2020.pdf',
      invert: true,
    },
  ],

  description: ['Dominic Travis Kudiabor', 'A Full-Stack / Software Developer'],
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
    id: 'techStack-section',
    header: 'Tech-Stack',
  },
};

export const about = {
  sectionProps: {
    id: 'about-section',
    header: 'About Me',
  },
  avatar: require('./assets/images/dominic.jpg'),
  alt: 'Avatar of my profile photo',
  description:
    'Focused driven professional, having excellent technical and analytical skills. Offering 3 years of experience in the Full Stack eco-system. Proficient at state management, feature development and implementation.  ',
};

export const projects = {
  sectionProps: {
    id: 'projects-section',
    header: 'Projects',
  },

  cards: [
    {
      name: 'Valpas Recruitment App',
      imageUrl: require('./assets/images/native.png'),
      stack: 'React Native, TypeScript, Redux, AWS, Amplify, Expo CLI, AWS CLI',
      gitLink: '',
      viewLink: '',
    },
    {
      name: 'Clothing Store Frontend',
      imageUrl: require('./assets/images/frontend.png'),
      stack: 'React.js, TypeScript, Redux, SASS, Context-API',
      gitLink: 'https://github.com/dominickudiabor/clothing-store-frontend',
      viewLink: '',
    },
    {
      name: 'Clothing Store Backend',
      imageUrl: require('./assets/images/backend.png'),
      stack: 'Express.js, Node.js, MongoDB, REST API , JWT, Passport',
      gitLink: 'https://github.com/dominickudiabor/clothing-store-backend',
      viewLink: '',
    },
    {
      name: 'Portfolio',
      imageUrl: require('./assets/images/portfolio.png'),
      stack: 'React , Typescript, React Router, Sass, ',
      gitLink: 'https://github.com/dominickudiabor/portfolio',
      viewLink: 'https://dominickudiabor.netlify.app/',
    },
    {
      name: 'Country Web App',
      imageUrl: require('./assets/images/countries.png'),
      stack: 'React , Typescript, Context API, Redux ',
      gitLink: 'https://github.com/dominickudiabor/country-web-app',
      viewLink: 'https://countries-web-app.netlify.app/',
    },
  ],
};

export const contact = {
  sectionProps: {
    id: 'contact-section',
    header: 'Contact Me!',
  },
  links: {
    Github: 'https://github.com/dominickudiabor',
    Linkedin: 'https://www.linkedin.com/in/dominickudiabor/',
    Gmail: 'dominickudd@gmail.com',
    Medium: 'https://medium.com/@dominickud',
    CellPhone: '046 9496179',
  },
};
