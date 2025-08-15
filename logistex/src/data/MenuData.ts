interface MenuItem {
  id: number
  title: string
  link: string
  has_dropdown: boolean
  sub_menus?: {
    link: string
    title: string
    mega_menu?: {
      link: string
      title: string
    }[]
  }[]
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    // has_dropdown: true,
    has_dropdown: false,
    title: "Home",
    //
    link: "/",
    //  sub_menus: [
    //    { link: "/", title: "Cargo Shipping" },
    //    { link: "/home-two", title: "Marine Shipping" },
    //    { link: "/home-three", title: "Air Logistics" },
    //    { link: "/home-four", title: "Cargo Warehouse" },
    //  ],
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: true,
    // title: "Pages",
    title: "Services",
    link: "#",
    sub_menus: [
      // { link: "/who-we-are", title: "Who We Are" },
      {
        link: "/Industries-We-Serve",
        title: "ISO Certifications",
      },
      { link: "/who-we-are", title: "Compliance & Risk Management" },
      // { link: "/who-we-are", title: "Auditing Services" },
      // { link: "/risk", title: "Risk & Mangement Services" },
      { link: "/risk", title: "Oil & Gas Registration" },
      { link: "/isoTraining", title: "Vendor Registration Support" },
      // { link: "/history", title: "Our Company History" },
      // {
      //   link: "/Industries-We-Serve",
      //   title: "Industries We Serve",
      // },
      // {
      //   link: "/services",
      //   title: "Our Services",
      // },
      // {
      //   link: "#",
      //   title: "Services",
      //   mega_menu: [
      //     { link: "/services", title: "Our Services" },
      //     { link: "/services-details", title: "Services Details" },
      //   ],
      // },

      // {
      //   link: "#",
      //   title: "Portfolio",
      //   mega_menu: [
      //     { link: "/project", title: "Our Portfolio" },
      //     { link: "/project-details", title: "Portfolio Details" },
      //   ],
      // },
      // {
      //   link: "#",
      //   title: "Team",
      //   mega_menu: [
      //     { link: "/team", title: "Team Page" },
      //     { link: "/team-details", title: "Team Details" },
      //   ],
      // },
      // { link: "/how-it-work", title: "How It’s Work" },
      // { link: "/pricing", title: "Pricing Page" },
      // { link: "/faq", title: "FAQ Page" },
      // { link: "/testimonial", title: "Testimonial Page" },
      // { link: "/client", title: "Our Partners" },
    ],
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Industries We Serve",
    link: "/blog-details",
    // sub_menus: [
    //   { link: "/blog", title: "Our Blog" },
    //   { link: "/blog-details", title: "Blog Details" },
    // ],
  },
  // {
  //   id: 4,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/blog", title: "Our Blog" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
  // {
  //   id: 5,
  //   has_dropdown: false,
  //   title: "Contact",
  //   link: "/contact",
  // },
]
export default menu_data
