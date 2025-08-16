import Image from "next/image"
import Link from "next/link"

// import sevice_details1 from "@/assets/img/logo/logo02.svg"
import sevice_details1 from "@/assets/img/logo/isoCert-1-red_3.svg"

import InjectableSvg from "@/components/common/InjectableSvg"

const ServiceSidebar = () => {
  return (
    <div className="col-30" style={{ marginBottom: "20px" }}>
      <aside className="services__sidebar">
        {/* <div className="services__widget">
               <div className="services__cat-list">
                  <ul className="list-wrap">
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-ship"></i>Ocean Freight</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-air-freight"></i>Air Freight</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-train"></i>Rail Freight</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-truck"></i>Road Freight</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-warehouse-1"></i>Warehouse</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services-details">
                           <span><i className="flaticon-delivery-cart"></i>Cargo Freight</span> <i className="flaticon-right-arrow"></i>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div> */}
        <div className="services__widget services__widget-two">
          <div className="sidebar__logo">
            <Link href="/">
              <Image src={sevice_details1} alt="logo" width={100} height={15} />
            </Link>
          </div>
          <div className="sidebar__contact">
            <h2 className="title">
              {/* Isocert <br /> For Certification */}
              For Certification
            </h2>
            <Link href="tle:0123456789" className="sidebar__phone">
              <i className="flaticon-telephone"></i>+(964) 787 4946122
            </Link>
            {/* <Link href="tle:0123456789" className="sidebar__phone">
              <i className="flaticon-telephone"></i>(+964) 750 4946122
            </Link> */}
            <Link href="/contact" className="btn">
              Contact With us{" "}
              <InjectableSvg
                src="/assets/img/icon/right_arrow.svg"
                alt=""
                className="injectable"
              />
            </Link>
          </div>
          <div
            className="sidebar__shape"
            style={{
              backgroundImage: `url(/assets/img/services/services_sidebar_shape.png)`,
            }}
          ></div>
        </div>
        <div className="services__widget services__widget-three">
          <h4 className="sidebar__widget-title">Brochure</h4>
          <div className="sidebar__brochure">
            <p>Get Certified With Us to take your busines to a higher level</p>
            {/* <div className="counter__item">
              <div className="counter__content">
                <h2 className="count">We Work Outside and Inside Iraq</h2>
              </div>
            </div> */}
            <div className="counter__item">
              <div className="counter__icon">
                <i className="flaticon-parcel"></i>
              </div>
              <div className="counter__content">
                <h2 className="count">
                  <span className="counter-number">15 years</span>
                </h2>
                <p>Experince</p>
              </div>
            </div>

            {/* <Link
              href="/assets/img/services/services_img01.jpg"
              target="_blank"
              download=""
            >
              <InjectableSvg
                src="/assets/img/icon/pdf.svg"
                alt=""
                className="injectable"
              />
              PDF. Download
            </Link>
            <Link
              href="/assets/img/services/services_img01.jpg"
              target="_blank"
              download=""
            >
              <InjectableSvg
                src="/assets/img/icon/doc.svg"
                alt=""
                className="injectable"
              />
              DOC. Download
            </Link> */}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default ServiceSidebar
