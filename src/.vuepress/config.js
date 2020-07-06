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
        text: 'Angular Training',
        link: 'https://github.com/ro-msg-angular-training/resources',
      },
      {
        text: 'Spring Training',
        link: 'https://github.com/ro-msg-spring-training/resources',
      },
    ],
    sidebar: [
      {
        title: 'Preface',
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
      },
      {
        title: 'Regions and AZs',
        path: '/infra/',
      },
      {
        title: 'IAM',
        path: '/iam/',
      },
      {
        title: 'Security',
        path: '/security/',
      },
      {
        title: 'Networking',
        path: '/networking/',
      },
      {
        title: 'EC2',
        path: '/ec2/',
      },
      {
        title: 'RDS',
        path: '/rds/',
      },
      {
        title: 'S3',
        path: '/s3/',
      },
      {
        title: 'Integration',
        path: '/integration/',
      },
      {
        title: 'Serverless',
        path: '/serverless/',
      },
    ],
  },
};
