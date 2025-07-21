import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
// import work_data from "@/data/WorkData"
import Image from "next/image"
import Link from "next/link"

const HowItWorkArea = () => {
  return (
    <section className="work__area-three section-pt-120 section-pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-50">
              <span className="sub-title">HOW IT WORKS</span>
              <h2 className="title">
                How We Operate Unveiling <br /> Our Logistics Process
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-24 justify-content-center">
          {service_data
            .filter((items) => items.page === "inner_page")
            .map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="services__item-three">
                  <div className="services__thumb-three">
                    <Link href="/services-details">
                      <Image src={item.img ? item.img : ""} alt="img" />
                    </Link>
                    <Link href="/services-details" className="btn border-btn">
                      Read More{" "}
                      <InjectableSvg
                        src="/assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link>
                  </div>
                  <div
                    className="services__content-three"
                    // aaaa
                    style={{ padding: "10px" }}
                  >
                    {/* <Link href="/contact" className="btn">
                      Read More{" "}
                      <InjectableSvg
                        src="/assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link> */}
                    {/* <div className="services__icon-three">
                      <i className="flaticon-ship"></i>
                    </div> */}
                    <h4 className="title">
                      <Link href="/services-details">
                        {item.title ? item.title : "New Service"}
                      </Link>
                    </h4>
                    {/* <p>
                      Road transpo arer tation criucial follw roley Logistins
                      coordinated trans portatn the countries destination.
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div className="work__item-wrap">
               <div className="row justify-content-center">
                  {work_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-sm-6">
                        <div className="work__item work__item-two work__item-three">
                           <div className="work__icon work__icon-two work__icon-three">
                              <i className={item.icon}></i>
                              <span className="number">{item.number}</span>
                           </div>
                           <div className="work__content work__content-three">
                              <h4 className="title">{item.title}</h4>
                              <p>{item.desc}</p>
                           </div>
                           <div className="work__shape work__shape-three">
                              <InjectableSvg src="/assets/img/images/work_shape01.svg" alt="" className="injectable" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div> */}
      </div>
    </section>
  )
}

export default HowItWorkArea
