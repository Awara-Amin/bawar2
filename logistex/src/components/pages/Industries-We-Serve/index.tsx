import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderFour from "@/layouts/headers/HeaderFour"
import HowItWorkArea from "./HowItWorkArea"

const IndustriesWeServe = () => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderFour />
      <main className="fix">
        <Breadcumb
          title="ISO Certification"
          sub_title="ISO Certification Services"
        />
        <HowItWorkArea />
      </main>
      <FooterTwo />
    </div>
  )
}

export default IndustriesWeServe
