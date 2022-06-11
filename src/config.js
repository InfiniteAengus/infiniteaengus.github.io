module.exports = {
  siteTitle: 'James Bell',
  siteDescription:
    'James Bell is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'James Bell, James, Bell, infinite, infiniteaengus, InfiniteAengus, james, bell, software engineer, web developer, javascript, python, react, node, express, nft, smart contract, solidity, blockchain',
  siteUrl: 'https://infiniteaengus.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'James Bell',
  location: 'New York, USA',
  email: 'infiniteaengus@gmail.com',
  github: 'https://github.com/infiniteaengus',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/infiniteaengus',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/james-bell-468a16239',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/infiniteaenugs',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/infiniteaengus',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
