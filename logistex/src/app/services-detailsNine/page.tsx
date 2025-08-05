import ServiceDetailsNine from "@/components/pages/services/service-detailsNine"
// import service_data from "@/data/ServiceData"
import Wrapper from "@/layouts/Wrapper"
// import { notFound } from "next/navigation"
// import { StaticImageData } from "next/image"

export const metadata = {
  title:
    "Service Details Logistex - Transport & Logistics React Next js Template",
}

const page = () => {
  //   console.log("hi-1 inside folder of service-details")

  return (
    <Wrapper>
      <ServiceDetailsNine />
    </Wrapper>
  )
}

export default page
