// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Pages",
    links: [
      { name: "Portfolio", url: "/portfolio" },
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
  },

];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};