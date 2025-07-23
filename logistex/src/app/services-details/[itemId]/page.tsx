import ServiceDetails from "@/components/pages/services/service-details"
import service_data from "@/data/ServiceData"
import Wrapper from "@/layouts/Wrapper"
import { notFound } from "next/navigation"

export const metadata = {
  title:
    "Service Details Logistex - Transport & Logistics React Next js Template",
}

// const page = () => {
//   console.log("hi-1 inside folder of service-details")

//   return (
//     <Wrapper>
//       <ServiceDetails />
//     </Wrapper>
//   )
// }

// export default page

// ✅ Generates static paths for each item
// export function generateStaticParams() {
//   return service_data.map((item) => ({
//     itemId: item.id.toString(),
//   }))
// }

// ✅ Correct typing of props here (no async type confusion)
export default function Page({ params }: { params: { itemId: string } }) {
  const item = service_data.find(
    (service) => service.id.toString() === params.itemId
  )

  if (!item) return notFound()

  return (
    <Wrapper>
      <ServiceDetails item={item} />
    </Wrapper>
  )
}
