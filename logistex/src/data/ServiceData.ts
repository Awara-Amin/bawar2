// import { StaticImageData } from "next/image"

// import service_1 from "@/assets/img/services/services_img08.jpg"
// import service_2 from "@/assets/img/services/services_img04.jpg"
// import service_3 from "@/assets/img/services/services_img03.jpg"
// import service_4 from "@/assets/img/services/services_img04.jpg"
// import service_5 from "@/assets/img/services/services_img07.jpg"
// import service_6 from "@/assets/img/services/services_img08.jpg"
// import service_7 from "@/assets/img/services/services_img09.jpg"
// import service_8 from "@/assets/img/services/services_img11.jpg"
// import service_9 from "@/assets/img/services/services_img18.jpg"

// import service_11 from "@/assets/img/services/services_img14.jpg"
// import service_12 from "@/assets/img/services/services_img15.jpg"
// import service_17 from "@/assets/img/services/services_img17.jpg"
// import service_20 from "@/assets/img/services/services_img20.jpg"
// import service_21 from "@/assets/img/services/services_img21.jpg"
// import service_22 from "@/assets/img/services/services_img22.jpg"
// import service_23 from "@/assets/img/services/services_img23.jpg"
// import service_10 from "@/assets/img/services/services_img13.jpg"

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
  // home_4
  {
    id: 1,
    page: "home_4",
    // img: service_1,
    img: "/images/mane.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 9001:2015 Certification - Quality Management System",
    desc: "Achieve internationally recognized quality standards with ISO 9001:2015 certification. Our certification process ensures your organization meets the highest Quality Management System (QMS) requirements, improving efficiency, customer satisfaction, and regulatory compliance. We provide end-to-end support, from documentation to implementation and certification. Strengthen your business credibility and gain a competitive edge with our professional ISO certification services.",
  },

  {
    id: 2,
    page: "home_4",
    // img: service_9,
    img: "/images/services_img18.jpg",
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "ISO 14001:2015 Certification - Environmental Management System",
    desc: "Enhance your organization's environmental performance with ISO 14001:2015 certification. This internationally recognized standard helps businesses implement an effective Environmental Management System (EMS) to reduce environmental impact, comply with regulations, and improve sustainability. Our certification services guide you through the entire process, ensuring compliance and efficiency.",
  },
  {
    id: 3,
    page: "home_4",
    // img: service_21,
    img: "/images/services_img21.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 45001:2018 Certification – Occupational Health & Safety",
    desc: "Protect your workforce and ensure a safer work environment with ISO 45001:2018 certification. This international standard for Occupational Health & Safety Management Systems (OH&S) helps organizations minimize workplace risks, prevent injuries, and comply with safety regulations. Our expert certification services guide you through implementation, ensuring compliance and continuous improvement. Demonstrate your commitment to employee well-being—contact us today to achieve ISO 45001 certification.",
  },

  {
    id: 4,
    page: "home_4",
    img: "/images/services_img11.jpg",
    // img: service_8,
    // icon: "flaticon-delivery-cart",

    icon: "flaticon-delivery-man",
    // title: "ISO 29001:2020 Certification – Elevate Quality in Oil & Gas!",
    title: "ISO 29001:2020 Certification – Elevate Quality in Oil & Gas",
    // desc: "Ensuring safety and quality in high-risk environments.",
    desc: "Set your business apart in the oil and gas industry with ISO 29001:2020 certification! This globally recognized standard ensures your Quality Management System (QMS) meets the highest industry requirements for safety, reliability, and operational excellence. Designed specifically for petroleum, petrochemical, and natural gas sectors, ISO 29001 helps you reduce risks, improve efficiency, and win the trust of major industry players.",
  },

  // {
  //   id: 4,
  //   page: "home_4",
  //   // img: service_10,
  //   img: "/images/services_img13.jpg",
  //   // icon: "flaticon-warehouse",
  //   icon: "flaticon-delivery-man",
  //   title:
  //     "ISO 22000:2018 Certification – Food Safety Management System (FSMS)",
  //   desc: "Ensure the highest standards of food safety with ISO 22000:2018 certification. This internationally recognized Food Safety Management System (FSMS) helps catering services, food manufacturers, and suppliers prevent foodborne hazards, comply with regulations, and maintain hygiene and safety throughout the food chain. Our expert certification services guide you through the process, ensuring compliance and continuous improvement.",
  // },

  {
    id: 5,
    page: "home_4",
    // img: service_17,
    img: "/images/services_img17.jpg",
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "ISO 27001:2013 Certification – Secure Your Business, Build Trust!",
    desc: "Protect your organization's sensitive information with ISO 27001:2013 certification, the global standard for Information Security Management Systems (ISMS). In today's digital world, data breaches and cyber threats can put your business at risk—ISO 27001 helps you safeguard valuable data, enhance customer trust, and comply with security regulations. Whether you're handling client information, financial records, or confidential business data, certification proves your commitment to security and reliability.",
  },

  {
    id: 6,
    page: "home_4",
    // img: service_12,
    img: "/images/services_img15.jpg",
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title:
      "ISO 15189:2012 Certification – Elevate Your Medical Laboratory Standards!",
    desc: "Gain a competitive edge in the healthcare industry with ISO 15189:2012 certification, the international standard for Medical Laboratories – Quality and Competence. This certification ensures your laboratory meets the highest standards in accuracy, reliability, and efficiency, building trust with patients, healthcare providers, and regulatory bodies. Whether you run a clinical, diagnostic, or pathology lab, ISO 15189 enhances your credibility and opens new opportunities for partnerships and accreditation..",
  },

  // inner_page
  {
    id: 11,
    page: "inner_page",
    // img: service_1,
    // img: "/images/services_img08.jpg",
    img: "/images/mane.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 9001:2015 Certification - Quality Management System",
    desc: "Achieve internationally recognized quality standards with ISO 9001:2015 certification. Our certification process ensures your organization meets the highest Quality Management System (QMS) requirements, improving efficiency, customer satisfaction, and regulatory compliance. We provide end-to-end support, from documentation to implementation and certification. Strengthen your business credibility and gain a competitive edge with our professional ISO certification services.",
  },
  {
    id: 12,
    page: "inner_page",
    // img: service_9,
    img: "/images/services_img18.jpg",
    // icon: "flaticon-warehouse",
    icon: "flaticon-delivery-man",
    title: "ISO 14001:2015 Certification - Environmental Management System",
    desc: "Enhance your organization's environmental performance with ISO 14001:2015 certification. This internationally recognized standard helps businesses implement an effective Environmental Management System (EMS) to reduce environmental impact, comply with regulations, and improve sustainability. Our certification services guide you through the entire process, ensuring compliance and efficiency.",
  },
  {
    id: 13,
    page: "inner_page",
    // img: service_21,
    img: "/images/services_img21.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 45001:2018 Certification – Occupational Health & Safety",
    desc: "Protect your workforce and ensure a safer work environment with ISO 45001:2018 certification. This international standard for Occupational Health & Safety Management Systems (OH&S) helps organizations minimize workplace risks, prevent injuries, and comply with safety regulations. Our expert certification services guide you through implementation, ensuring compliance and continuous improvement. Demonstrate your commitment to employee well-being—contact us today to achieve ISO 45001 certification.",
  },
  {
    id: 14,
    page: "inner_page",
    img: "/images/services_img11.jpg",
    // img: service_8,
    icon: "flaticon-delivery-man",
    title: "ISO 29001:2020 Certification – Elevate Quality in Oil & Gas",
    // desc: "Ensuring safety and quality in high-risk environments.",
    desc: "Set your business apart in the oil and gas industry with ISO 29001:2020 certification! This globally recognized standard ensures your Quality Management System (QMS) meets the highest industry requirements for safety, reliability, and operational excellence. Designed specifically for petroleum, petrochemical, and natural gas sectors, ISO 29001 helps you reduce risks, improve efficiency, and win the trust of major industry players.",
  },
  {
    id: 15,
    page: "inner_page",
    // img: service_17,
    img: "/images/services_img17.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 27001:2013 Certification – Secure Your Business, Build Trust",
    desc: "Protect your organization's sensitive information with ISO 27001:2013 certification, the global standard for Information Security Management Systems (ISMS). In today's digital world, data breaches and cyber threats can put your business at risk—ISO 27001 helps you safeguard valuable data, enhance customer trust, and comply with security regulations. Whether you're handling client information, financial records, or confidential business data, certification proves your commitment to security and reliability.",
  },
  {
    id: 16,
    page: "inner_page",
    // img: service_12,
    img: "/images/services_img15.jpg",
    icon: "flaticon-delivery-man",
    title:
      "ISO 15189:2012 Certification – Elevate Your Medical Laboratory Standards",
    desc: "Gain a competitive edge in the healthcare industry with ISO 15189:2012 certification, the international standard for Medical Laboratories – Quality and Competence. This certification ensures your laboratory meets the highest standards in accuracy, reliability, and efficiency, building trust with patients, healthcare providers, and regulatory bodies. Whether you run a clinical, diagnostic, or pathology lab, ISO 15189 enhances your credibility and opens new opportunities for partnerships and accreditation.",
  },

  {
    id: 17,
    page: "inner_page",
    // img: service_10,
    img: "/images/services_img13.jpg",
    icon: "flaticon-delivery-man",
    title:
      "ISO 22000:2018 Certification – Food Safety Management System (FSMS)",
    desc: "Ensure the highest standards of food safety with ISO 22000:2018 certification. This internationally recognized Food Safety Management System (FSMS) helps catering services, food manufacturers, and suppliers prevent foodborne hazards, comply with regulations, and maintain hygiene and safety throughout the food chain. Our expert certification services guide you through the process, ensuring compliance and continuous improvement.",
  },

  {
    id: 18,
    page: "inner_page",
    // img: service_23,
    img: "/images/services_img23.jpg",
    icon: "flaticon-delivery-man",
    title: "Integrated Management System (IMS) certification",
    desc: "Streamline your business operations with Integrated Management System (IMS) certification, combining ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Health & Safety) into a unified framework. IMS improves efficiency, reduces duplication, and enhances compliance with international standards. Our expert team guides you through implementation, documentation, and certification to ensure seamless integration. Optimize your management systems and boost operational excellence.",
  },

  {
    id: 19,
    page: "inner_page",
    // img: service_20,
    img: "/images/services_img20.jpg",
    icon: "flaticon-delivery-man",
    title: "ISO 18788:2015 Certification – Elevate Your Security Standards",
    desc: "Gain a competitive edge in the security industry with ISO 18788:2015 certification! This globally recognized standard ensures your Security Operations Management System (SOMS) meets the highest levels of professionalism, risk management, and legal compliance. Whether you're a private security firm or managing critical security operations, ISO 18788 enhances your credibility, improves operational efficiency, and builds trust with clients. Stand out as a leader in security excellence.",
  },

  {
    id: 20,
    page: "inner_page",
    // img: service_11,
    img: "/images/services_img14.jpg",
    icon: "flaticon-delivery-man",
    title:
      "ISO 37001:2016 Certification – Protect Your Business from Corruption",
    desc: "Protect your customers and enhance your reputation with HACCP (Hazard Analysis and Critical Control Points) certification! This globally recognized system helps businesses in the food and beverage industry identify, prevent, and control food safety hazards. Whether you're a restaurant, catering service, food manufacturer, or supplier, HACCP certification ensures compliance with international food safety standards, boosts customer confidence, and opens doors to new business opportunities.",
  },
  {
    id: 21,
    page: "inner_page",
    // img: service_22,
    img: "/images/services_img22.jpg",
    icon: "flaticon-delivery-man",
    title: "HACCP Certification – Ensure Food Safety & Build Trust",
    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
  },
]

export default service_data
