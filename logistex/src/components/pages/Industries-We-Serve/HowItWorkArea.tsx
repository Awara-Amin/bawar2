import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
// import work_data from "@/data/WorkData"
// import Image from "next/image"
import Link from "next/link"

const ourServices = service_data.filter((item) => item.page === "inner_page")

const HowItWorkArea = () => {
  return (
    <section className="work__area-three section-pt-120 section-pb-90">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6"> */}
          <div className="col-lg-12">
            <div className="section__title text-center mb-50">
              {/* <span className="sub-title">HOW IT WORKS</span> */}
              <h2 className="title">
                We guide businesses through the certification process for a wide
                range of ISO standards, including:
                {/* How We Operate Unveiling <br /> Our Logistics Process */}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-24 justify-content-center">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="/services-detailsOne">
                  <img src={ourServices[0].img} alt="img" />
                </Link>
                <Link
                  // href={`/services-details/${ourServices[0].id}`}
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
                  <i className={ourServices[0].icon}></i>
                </div>
                <p>{ourServices[0].title}</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsTwo">
                  <img src={ourServices[1].img} alt="img" />
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
                  <i className={ourServices[1].icon}></i>
                </div>
                <p>{ourServices[1].title}</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsThree">
                  <img src={ourServices[2].img} alt="img" />
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
                  <i className={ourServices[2].icon}></i>
                </div>
                <p>{ourServices[2].title}</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsFour">
                  <img src={ourServices[3].img} alt="img" />
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
                  <i className={ourServices[3].icon}></i>
                </div>
                <p>{ourServices[3].title}</p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsFive">
                  <img src={ourServices[4].img} alt="img" />
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
                  <i className={ourServices[4].icon}></i>
                </div>
                <p>{ourServices[4].title}</p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsSix">
                  <img src={ourServices[5].img} alt="img" />
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
                  <i className={ourServices[5].icon}></i>
                </div>
                <p>{ourServices[5].title}</p>
              </div>
            </div>
          </div>

          {/* Service 7 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsSeven">
                  <img src={ourServices[6].img} alt="img" />
                </Link>
                <Link href="services-detailsSeven" className="btn border-btn">
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
                  <i className={ourServices[6].icon}></i>
                </div>
                <p>{ourServices[6].title}</p>
              </div>
            </div>
          </div>

          {/* Service 8 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsEight">
                  <img src={ourServices[7].img} alt="img" />
                </Link>
                <Link href="services-detailsEight" className="btn border-btn">
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
                  <i className={ourServices[7].icon}></i>
                </div>
                <p>{ourServices[7].title}</p>
              </div>
            </div>
          </div>

          {/* Service 9 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsNine">
                  <img src={ourServices[8].img} alt="img" />
                </Link>
                <Link href="services-detailsNine" className="btn border-btn">
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
                  <i className={ourServices[8].icon}></i>
                </div>
                <p>{ourServices[8].title}</p>
              </div>
            </div>
          </div>

          {/* Service 10 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsTen">
                  <img src={ourServices[9].img} alt="img" />
                </Link>
                <Link href="services-detailsTen" className="btn border-btn">
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
                  <i className={ourServices[9].icon}></i>
                </div>
                <p>{ourServices[9].title}</p>
              </div>
            </div>
          </div>

          {/* Service 11 */}
          <div className="col-lg-4 col-md-6">
            <div className="services__item-three">
              <div className="services__thumb-three">
                <Link href="services-detailsElev">
                  <img src={ourServices[10].img} alt="img" />
                </Link>
                <Link href="services-detailsElev" className="btn border-btn">
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
                  <i className={ourServices[10].icon}></i>
                </div>
                <p>{ourServices[10].title}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row gutter-24 justify-content-center">
          {service_data
            .filter((items) => items.page === "inner_page")
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
                  <div
                    className="services__content-three"
                    style={{ padding: "10px" }}
                  >
                    <p>{item.title ? item.title : "New Service"}</p>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
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
