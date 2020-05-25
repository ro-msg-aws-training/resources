module.exports = {
  title: 'Getting Productive with AWS',
  description:
    'The quickest way to be productive with Amazon Web Services. It covers the most used (by far) services and common architectures/patterns.',
  base: '/resources/',
  dest: 'docs',
  extraWatchFiles: ['.vuepress/config.js'],
  lastUpdated: 'Last updated',
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
    sidebar: [
      {
        title: 'Contents',
        path: '/',
      },
      {
        title: 'Cloud Intro',
        path: '/cloud/',
      },
      {
        title: 'AWS Intro',
        path: '/aws/',
      },
      {
        title: 'AWS Services',
        path: '/services/',
      },
      {
        title: 'Infrastructure as Code',
        path: '/iac/',
        children: [
          { title: 'Resources', path: '/iac/resources' },
          { title: 'Parameters', path: '/iac/parameters' },
        ],
      },
      {
        title: 'Regions and AZs',
        path: '/infra/',
      },
      {
        title: 'IAM',
        path: '/iam/',
        children: [
          {
            title: 'Users',
            path: '/iam/users',
          },
          { title: 'Groups', path: '/iam/groups' },
          { title: 'Roles', path: '/iam/roles' },
          { title: 'Hands-On', path: '/iam/hands_on' },
        ],
      },
    ],
  },
};
