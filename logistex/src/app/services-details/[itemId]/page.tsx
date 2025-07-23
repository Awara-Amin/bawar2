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

type PageProps = {
  params: {
    itemId: string
  }
}

export async function generateStaticParams() {
  return service_data.map((item) => ({
    itemId: item.id.toString(),
  }))
}

export default function Page({ params }: PageProps) {
  const item = service_data.find((el) => el.id.toString() === params.itemId)

  if (!item) {
    notFound()
  }

  return (
    <Wrapper>
      <ServiceDetails item={item} />
    </Wrapper>
  )
}
