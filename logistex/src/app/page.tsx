import Wrapper from "@/layouts/Wrapper"
// import HomeOne from "../components/homes/home-one/HomeOne"
import HomeFour from "@/components/homes/home-four"
// import HomeThree from "@/components/homes/home-three"
// import HomeTwo from "@/components/homes/home-two"

export const metadata = {
  // title: "Logistex - Transport & Logistics React Next js Template",
  title: "ISOCERT - Certify With Cofidence",
}
const page = () => {
  return (
    <Wrapper>
      {/* <HomeOne /> */}
      {/* <HomeThree /> */}
      <HomeFour />
      {/* <HomeTwo /> */}
    </Wrapper>
  )
}

export default page
