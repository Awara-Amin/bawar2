import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

// import shape_1 from "@/assets/img/services/h4_services_shape01.svg"
import shape_1 from "@/assets/img/services/h4_services_shape02.svg"
import shape_2 from "@/assets/img/services/h4_services_shape02.svg"
import shape_3 from "@/assets/img/services/h4_services_shape03.svg"

const home4Services = service_data.filter((item) => item.page === "home_4")

const Service = () => {
  return (
    // <section className="services__area-four grey-bg section-pt-140 section-pb-130">
    <section className="services__area-four grey-bg section-pt-100 section-pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-9 col-lg-9 col-md-10">
            <div className="section__title mb-50 mb-md-30">
              {/* <span className="sub-title mt-5">ISO Standards</span> */}
              <h2 className="title">
                {/* We help diverse industries achieve certification—our expertise
                spans multiple standards. */}
                ISO Standards
              </h2>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-3 col-md-2">
            <div className="view-all-btn-two view-all-btn-three text-end mb-40">
              <Link href="/services" className="btn border-btn">
                All Services{" "}
                <InjectableSvg
                  src="/assets/img/icon/right_arrow.svg"
                  alt=""
                  className="injectable"
                />
              </Link>
            </div>
          </div> */}
        </div>
        {/* <div className="row gutter-24 justify-content-center">
          {service_data
            .filter((items) => items.page === "home_4")
            .map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="services__item-three">
                  <div className="services__thumb-three">
                    <Link href="/services-details">
                    
                      <img src={item.img ? item.img : ""} alt="img" />
                    </Link>
                  
                    <Link
                      href={`/services-details/${item.id}`}
                      className="btn border-btn"
                    >
                      Read More{" "}
                      <InjectableSvg
                        src="/assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link>
                  </div>
                  <div className="services__content-three">
                    <div className="services__icon-three">
                      <i className={item.icon}></i>
                    </div>
                  
                   
                    <p>{item.title}</p>
                  
                  </div>
                </div>
              </div>
            ))}
        </div> */}

        <div className="row gutter-24 justify-content-center">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="/services-detailsOne">
                  <img src={home4Services[0].img} alt="img" />
                </Link>
                <Link
                  // href={`/services-details/${home4Services[0].id}`}
                  href="/services-detailsOne"
                  className="btn border-btn"
                >
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[0].icon}></i>
                </div>
                <p>{home4Services[0].title}</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsTwo">
                  <img src={home4Services[1].img} alt="img" />
                </Link>
                <Link href="services-detailsTwo" className="btn border-btn">
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[1].icon}></i>
                </div>
                <p>{home4Services[1].title}</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsThree">
                  <img src={home4Services[2].img} alt="img" />
                </Link>
                <Link href="services-detailsThree" className="btn border-btn">
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[2].icon}></i>
                </div>
                <p>{home4Services[2].title}</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsFour">
                  <img src={home4Services[3].img} alt="img" />
                </Link>
                <Link href="services-detailsFour" className="btn border-btn">
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[3].icon}></i>
                </div>
                <p>{home4Services[3].title}</p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsFive">
                  <img src={home4Services[4].img} alt="img" />
                </Link>
                <Link href="services-detailsFive" className="btn border-btn">
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[4].icon}></i>
                </div>
                <p>{home4Services[4].title}</p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsSix">
                  <img src={home4Services[5].img} alt="img" />
                </Link>
                <Link href="services-detailsSix" className="btn border-btn">
                  Read More{" "}
                  <InjectableSvg
                    src="/assets/img/icon/right_arrow.svg"
                    alt=""
                    className="injectable"
                  />
                </Link>
              </div>
              <div className="services__content-three">
                <div className="services__icon-three">
                  <i className={home4Services[5].icon}></i>
                </div>
                <p>{home4Services[5].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services__shape-wrap-two">
        <Image
          src={shape_1}
          alt="shape"
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <Image src={shape_2} alt="shape" className="rotateme" />
        <Image src={shape_3} alt="shape" />
      </div>
    </section>
  )
}

export default Service
