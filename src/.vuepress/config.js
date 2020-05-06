module.exports = {
  title: 'Getting Productive with AWS',
  description:
    'The quickest way to be productive with Amazon Web Services. It covers the most used (by far) services and common architectures/patterns.',
  base: '/docs/',
  dest: 'docs',
  extraWatchFiles: ['.vuepress/config.js'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'AWS Training',
        link: 'https://github.com/ro-msg-aws-training/resources',
      },
      {
        text: 'React Training',
        link: 'https://github.com/ro-msg-react-training/resources',
      },
      {
        text: 'Spring Training',
        link: 'https://github.com/ro-msg-spring-training/resources',
      },
    ],
    sidebarDepth: 0,
    sidebar: [
      ['/', 'Contents'],
      ['/cloud', 'Cloud Intro'],
    ],
  },
};
