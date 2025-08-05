import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderFour from "@/layouts/headers/HeaderFour"
import ServiceDetailsArea from "./ServiceDetailsArea"
// import service_data from "@/data/ServiceData"
// import CTA from "../../who-we-are/CTA"
import FooterTwo from "@/layouts/footers/FooterTwo"
// import { StaticImageData } from "next/image"

// type Props = {
//   item: {
//     id: number
//     page: string
//     img?: string
//     // img?: StaticImageData
//     icon: string
//     title: string
//     desc: string
//     list?: string[]
//   }
// }

// export type ServiceItem = {
//   id: number
//   page: string
//   img?: string
//   // img?: StaticImageData
//   icon: string
//   title: string
//   desc: string
//   list?: string[]
// }

// type Props = {
//   item: {
//     id: string
//   }
// }

// const ServiceDetails = ({ item }: Props) => {
//   console.log("inside ServiceDetails 2, itemkaka:", item)
//   // const item1 = service_data.find(
//   //   (service) => service.id.toString() === item.id
//   // )

//   const item1 = service_data.find(
//     (service) => service.id.toString() === item.id
//   )

//   if (!item1) {
//     return <div>Service not found</div> // or use notFound()
//   }
//   return (
//     <div className="theme-red">
//       <ScrollToTop />
//       <HeaderFour />
//       <main className="fix">
//         <Breadcumb
//           title={item1?.title ?? "no title"}
//           sub_title="Service Details"
//         />
//         {/* <ServiceDetailsArea item={item1} /> */}
//         <ServiceDetailsArea item={item1} />
//       </main>
//       <FooterTwo style={true} />
//     </div>
//   )
// }

// export default ServiceDetails

const ServiceDetails = () => {
  // console.log("hi inside folder of service-details, then index")
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderFour />
      <main className="fix">
        <Breadcumb title="Service Details" sub_title="Service Details" />
        <ServiceDetailsArea />
      </main>
      {/* <CTA /> */}
      <FooterTwo style={true} />
    </div>
  )
}

export default ServiceDetails
