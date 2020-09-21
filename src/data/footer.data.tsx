import React from "react";

const footerNavigation = [
  {
    classname: "footer__links",
    reference: "#feature-section",
    children: "Feature",
  },
  { classname: "footer__links", reference: "#blog-section", children: "Blog" },
  { classname: "footer__links", reference: "#form", children: "Contact" },
];

const footerIcons = [
  {
    reference: "ttps://www.facebook.com/dominickudix",
    aria: "link to facebook",
    children: <i className="fab fa-facebook"></i>,
  },
  {
    reference: "https://github.com/dominickudiabor",
    aria: "link to github",
    children: <i className="fab fa-github"></i>,
  },
  {
    reference: "https://www.linkedin.com/in/dominickudiabor/",
    aria: "link to github",
    children: <i className="fab fa-linkedin"></i>,
  },
];

export { footerNavigation, footerIcons };
