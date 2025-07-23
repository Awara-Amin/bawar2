import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderFour from "@/layouts/headers/HeaderFour"
import ServiceDetailsArea from "./ServiceDetailsArea"
// import CTA from "../../who-we-are/CTA"
import FooterTwo from "@/layouts/footers/FooterTwo"
import service_data from "@/data/ServiceData"

type Props = {
  itemId: string
}

const ServiceDetails = ({ itemId }: Props) => {
  console.log("inside ServiceDetails, itemId:", itemId)

  const item = service_data.find((data) => data.id === Number(itemId))

  if (!item) return <p>Service not found.</p>

  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderFour />
      <main className="fix">
        <Breadcumb title={item.title} sub_title="Service Details" />
        <ServiceDetailsArea item={item} />
      </main>
      <FooterTwo style={true} />
    </div>
  )
}

export default ServiceDetails

// const ServiceDetails = () => {
//   console.log("hi inside folder of service-details, then index")
//   return (
//     <div className="theme-red">
//       <ScrollToTop />
//       <HeaderFour />
//       <main className="fix">
//         <Breadcumb title="Service Details" sub_title="Service Details" />
//         <ServiceDetailsArea />
//       </main>
//       {/* <CTA /> */}
//       <FooterTwo style={true} />
//     </div>
//   )
// }

// export default ServiceDetails
