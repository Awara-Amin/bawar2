import ServiceDetails from "@/components/pages/services/service-details"
import Wrapper from "@/layouts/Wrapper"

export const metadata = {
  title:
    "Service Details Logistex - Transport & Logistics React Next js Template",
}
const page = () => {
  alert("hi inside folder of service-details")
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page
