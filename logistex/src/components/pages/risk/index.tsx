import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderFour from "@/layouts/headers/HeaderFour"
// import Mission from "./Mission"
import Vision from "./Vision"
import FooterTwo from "@/layouts/footers/FooterTwo"
import CTA from "./CTA"

// const WhoWeAre = () => {
const Risk = () => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderFour />
      <main className="fix">
        {/* <Breadcumb title="Who We Are" sub_title="Who We Are" /> */}
        <Breadcumb
          title="Oil & Gas Registration"
          sub_title="Oil & Gas Registration Services"
        />
        {/* <Mission /> */}
        <Vision />
        <CTA />
        <FooterTwo style={true} />
      </main>
    </div>
  )
}

export default Risk
