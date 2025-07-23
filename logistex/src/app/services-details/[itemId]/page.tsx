import ServiceDetails from "@/components/pages/services/service-details"
import service_data from "@/data/ServiceData"
import Wrapper from "@/layouts/Wrapper"

type Props = {
  params: {
    itemId: string
  }
}

export const metadata = {
  title:
    "Service Details Logistex - Transport & Logistics React Next js Template",
}

export async function generateStaticParams() {
  return service_data.map((item) => ({
    itemId: item.id.toString(), // must match the dynamic param name
  }))
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

const Page = ({ params }: Props) => {
  return (
    <Wrapper>
      <ServiceDetails itemId={params.itemId} />
    </Wrapper>
  )
}

export default Page
