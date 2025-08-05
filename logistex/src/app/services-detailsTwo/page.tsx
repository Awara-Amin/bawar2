import ServiceDetailsTwo from "@/components/pages/services/service-detailsTwo"
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
      <ServiceDetailsTwo />
    </Wrapper>
  )
}

export default page
