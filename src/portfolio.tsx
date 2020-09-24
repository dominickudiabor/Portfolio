import React from 'react';

//header section
export const header = {
  userName: 'Dominic',
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
      reference: '#projects-section',
      link: 'Projects',
    },
    {
      id: 2,
      classname: 'header__links',
      reference: '#tech-section',
      link: 'Tech-Stack',
    },
    {
      id: 3,
      classname: 'header__links',
      reference: '#form-section',
      link: 'Contact',
    },
  ],
  menuLinks: ['About', 'Projects', 'Tech-Stack', 'Contact'],
};
