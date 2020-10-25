import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Young Cai', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio for Young Cai', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Young Cai',
  subtitle: "I'm a",
  cta: 'Learn more!',
};

// ABOUT DATA
export const aboutData = {
  img1: 'profile1.jpg',
  img2: 'profile2.jpg',
  img3: 'profile3.jpg',
  paragraphOne: "Hey, there! I'm Young, a recent U.C. Berkeley graduate, majoring in Data Science.",
  paragraphTwo:
    "Leveling up is my motto. I love learning new things, and once I get interested in something, my passion for it doesn't stop until I'm satisfied. Besides coding small projects, I love to fiddle with cards, play volleyball, and watch anime in my free time.",
  paragraphThree: 'Check out some of my projects below!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tunein.jpg',
    title: 'Tune-in',
    info:
      "A full-stack React+Flask web application utilizing Spotify API that allows users to create groups with their friends and generate playlists that contain new songs based on the group members' shared taste in music.",
    info2: '',
    url: 'https://tunein.dev/',
    repo1: 'https://github.com/youngchoycai/tune-in-frontend', // if no repo, the button will not show up
    repotext1: 'Front End',
    repo2: 'https://github.com/youngchoycai/tune-in-backend',
    repotext2: 'Back End',
  },
  {
    id: nanoid(),
    img: 'slowify.jpg',
    title: 'Slowify Music',
    info:
      'An audio playback Android app written in Java that gives users complete control of the tempo and looping of any song they decide to upload. Made with dancers, singers, and musicians in mind.',
    info2: "Also, cross-compatible with AFX Dance's web application, slow.afx.dance.",
    url: 'https://play.google.com/store/apps/details?id=dance.afx.music',
    repo1: 'https://github.com/youngchoycai/music-android', // if no repo, the button will not show up
    repotext1: 'Source code',
    repo2: 'https://slow.afx.dance/',
    repotext2: 'Web App',
  },
  {
    id: nanoid(),
    img: 'roster.jpg',
    title: "AFX Dance's Roster Application",
    info:
      "A Ruby on Rails roster management system created for the board members of AFX Dance to manage incoming dancers' info for the semester. It performs form collecting and team randomization, as well.",
    info2: '',
    url: '',
    repo1: 'https://github.com/youngchoycai/roster', // if no repo, the button will not show up
    repotext1: 'Source code',
    repo2: '',
    repotext2: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s get in touch!',
  email: 'youngchoycai@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/youngcai/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/youngchoycai',
    },
  ],
};
