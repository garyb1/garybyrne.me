export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Gary Byrne';
export const siteDescription = 'A personal website and blog for Gary Byrne';
export const siteType = 'Person'; // schema
export const locale = 'en_IE';
export const lang = 'en';
export const skipContent = 'Skip to content';

export const author = {
  name: 'Gary Byrne',
  avatar: '/icon-512x512.png',
  email: 'webgbdev@gmail.com',
  website: 'https://www.garybyrne.me'
};

export const creator = {
  name: 'Gary Byrne',
  email: 'webgbdev@gmail.com',
  website: 'https://www.garybyrne.me',
  social: 'https://x.com/garybyrne1_'
};

feedLinks: [
  {
    title: 'Atom Feed',
    url: '/feed.xml',
    type: 'application/atom+xml'
  }
],

export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#DD4462'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#FBFBFB'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: A personal website for Gary Byrne"; // alt text for default meta image"

export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const initial = 'select';
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'netlify.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
