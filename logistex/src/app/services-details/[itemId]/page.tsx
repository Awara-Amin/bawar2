import ServiceDetails from "@/components/pages/services/service-details"
import service_data from "@/data/ServiceData"
import Wrapper from "@/layouts/Wrapper"
import { notFound } from "next/navigation"

// type Props = {
//   params: {
//     itemId: string
//   }
// }

export const metadata = {
  title:
    "Service Details Logistex - Transport & Logistics React Next js Template",
}

// export async function generateStaticParams() {
//   return service_data.map((item) => ({
//     itemId: item.id.toString(), // must match the dynamic param name
//   }))
// }

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
  params: { itemId: string }
}

const Page = ({ params }: PageProps) => {
  const item = service_data.find((item) => item.id.toString() === params.itemId)

  if (!item) {
    return notFound()
  }

  return (
    <Wrapper>
      <ServiceDetails item={item} />
    </Wrapper>
  )
}

export default Page

export async function generateStaticParams() {
  return service_data.map((item) => ({
    itemId: item.id.toString(),
  }))
}
