// import { StaticImageData } from "next/image"

// import service_1 from "@/assets/img/services/services_img01.jpg"
// import service_2 from "@/assets/img/services/services_img02.jpg"
// import service_3 from "@/assets/img/services/services_img03.jpg"
// import service_4 from "@/assets/img/services/services_img04.jpg"
// import service_5 from "@/assets/img/services/services_img07.jpg"
// import service_6 from "@/assets/img/services/services_img08.jpg"
// import service_7 from "@/assets/img/services/services_img09.jpg"
// import service_8 from "@/assets/img/services/services_img11.jpg"
// import service_9 from "@/assets/img/services/services_img12.jpg"
// import service_10 from "@/assets/img/services/services_img13.jpg"
// import service_11 from "@/assets/img/services/services_img14.jpg"
// import service_12 from "@/assets/img/services/services_img15.jpg"
// import service_12 from "/images/services_img15.jpg"

interface DataType {
  id: number
  page: string
  // img?: StaticImageData
  img?: string
  icon: string
  title: string
  desc: string
  list?: string[]
}

const service_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    // img: service_1,
    icon: "flaticon-train",
    title: "Train Freight",
    desc: "Road transpo arer tation criucial roley coordinated trans portatn the countries destination.",
  },
  {
    id: 2,
    page: "home_1",
    // img: service_2,
    icon: "flaticon-ship",
    title: "Ocean Freight",
    desc: "Road transpo arer tation criucial roley coordinated trans portatn the countries destination.",
  },
  {
    id: 3,
    page: "home_1",
    // img: service_3,
    icon: "flaticon-truck",
    title: "Road Freight",
    desc: "Road transpo arer tation criucial roley coordinated trans portatn the countries destination.",
  },
  {
    id: 4,
    page: "home_1",
    // img: service_4,
    icon: "flaticon-train",
    title: "Train Freight",
    desc: "Road transpo arer tation criucial roley coordinated trans portatn the countries destination.",
  },

  // home_2
  {
    id: 1,
    page: "home_2",
    icon: "flaticon-delivery-cart",
    title: "Fast & Efficient Delivery",
    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
    list: [
      "Quality Control System",
      "Modern Technology",
      "100% True Result Provide",
    ],
  },
  {
    id: 2,
    page: "home_2",
    icon: "flaticon-ship",
    title: "Real - Time Tracking",
    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
    list: [
      "Quality Control System",
      "Modern Technology",
      "100% True Result Provide",
    ],
  },
  {
    id: 3,
    page: "home_2",
    icon: "flaticon-warehouse-1",
    title: "Warehouse Storage",
    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
    list: [
      "Quality Control System",
      "Modern Technology",
      "100% True Result Provide",
    ],
  },
  {
    id: 4,
    page: "home_2",
    icon: "flaticon-train",
    title: "Train Freight Location",
    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
    list: [
      "Quality Control System",
      "Modern Technology",
      "100% True Result Provide",
    ],
  },

  // home_4
  {
    id: 1,
    page: "home_4",
    // img: service_8,
    // icon: "flaticon-delivery-cart",
    icon: "flaticon-delivery-man",
    title: "Oil & Gas",
    desc: "Ensuring safety and quality in high-risk environments.",
  },
  {
    id: 2,
    page: "home_4",
    // img: service_9,
    icon: "flaticon-delivery-man",
    title: "Construction & Engineering",
    desc: "Meeting global safety, environmental compliance standards.",
  },
  {
    id: 3,
    page: "home_4",
    // img: service_10,
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "Food & Beverage",
    desc: "Implementing robust food safety management systems.",
  },
  {
    id: 4,
    page: "home_4",
    // img: service_11,
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "Corporate & Finance",
    desc: "Strengthening risk management and information security.",
  },
  {
    id: 5,
    page: "home_4",
    // img: service_7,
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "Logistics & Supply Chain",
    desc: "Enhancing operational efficiency and compliance.",
  },
  {
    id: 6,
    page: "home_4",
    // img: service_12,
    img: "/images/services_img15.jpg",
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "Health & Healthcare",
    desc: "Supporting patient safety, regulatory compliance, and quality management.",
  },

  // inner_page
  {
    id: 1,
    page: "inner_page",
    // img: service_1,
    icon: "flaticon-ship",
    title: "Quality Management System (QMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 2,
    page: "inner_page",
    // img: service_2,
    icon: "flaticon-truck",
    title: "Environmental Management System (EMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 3,
    page: "inner_page",
    // img: service_3,
    icon: "flaticon-air-freight",
    title: "Food Safety Management System (FSMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 4,
    page: "inner_page",
    // img: service_4,
    icon: "flaticon-train",
    title: "Information Security Management System (ISMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 5,
    page: "inner_page",
    // img: service_5,
    icon: "flaticon-delivery-cart",
    title: "Business Continuity Management System (BCMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 6,
    page: "inner_page",
    // img: service_6,
    icon: "flaticon-delivery-man",
    title: "Anti-Bribery Management System (ABMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
  {
    id: 7,
    page: "inner_page",
    // img: service_7,
    icon: "flaticon-delivery-man",
    title: "Occupational Health & Safety Management System (OHSMS)",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
]

export default service_data
