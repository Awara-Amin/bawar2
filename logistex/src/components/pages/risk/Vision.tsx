"use client"
// import { useInView } from "react-intersection-observer"
// import Image from "next/image"
// import vission_thumb from "@/assets/img/images/vision_img.jpg"

const Vision = () => {
  //   const [ref, inView] = useInView({
  //     triggerOnce: true,
  //     threshold: 0.75,
  //   })

  return (
    // <section className="vision__area section-pb-120">
    <section className="vision__area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="vision__inner-wrap">
              <div
                className="vision__img wow img-custom-anim-left animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {/* <Image src={vission_thumb} alt="img" /> */}
                {/* <img src="/images/vision_img.jpg" alt="img" /> */}
                <img src="/images/oil.jpg" alt="img" />
              </div>
              <div className="vision__content">
                <div className="section__title section__title-two mb-25">
                  <span className="sub-title">
                    Oil & Gas Registration Services
                  </span>
                  {/* <h2 className="title">Sustainability For indutry leaders</h2> */}
                </div>
                {/* <p>
                
                  We provide expert assistance in:
                </p> */}

                <div className="about__list-box about__list-box-two about__list-box-three">
                  <ul className="list-wrap">
                    <li>
                      ✔ Expert assistance in registering companies with Iraqi
                      and international oil companies (IOCs), including:
                    </li>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        marginTop: "2px",
                      }}
                    >
                      <span>• Basra Oil Company</span>
                      <span>• Basra Gas Company</span>
                      <span>• Other public sector entities</span>
                      <span>• Major operators in Iraq</span>
                    </span>

                    <li className="pt-2">
                      ✔ Support for registration with the Kurdistan Regional
                      Government&apos;s Ministry of Natural Resources (MNR).
                      Approved Vendor List (AVL) system.
                      {/* <i className="flaticon-check"></i>External Audits –
                      Prepare for third-party certification with confidence. */}
                    </li>
                    <li>
                      ✔ Ensure full compliance with local regulations, industry
                      requirements, and procurement standards.
                    </li>
                    <li>
                      ✔ Facilitate business approval for contracts and tenders.
                    </li>
                    <li>
                      ✔ Manage the entire process from documentation
                      preparation to submission and follow-up.
                    </li>
                    <li>
                      ✔ Help expand business opportunities in Iraq and the
                      Kurdistan Region&apos;s growing energy sector.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
