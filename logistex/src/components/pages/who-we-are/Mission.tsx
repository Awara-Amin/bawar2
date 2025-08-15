import Image from "next/image"

// import mission_thumb from "@/assets/img/images/mission_img.jpg"
import shape from "@/assets/img/images/mission_shape.svg"

const Mission = () => {
  return (
    <section className="mission__area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mission__inner-wrap">
              <div
                className="mission__img wow img-custom-anim-right animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {/* <Image src={mission_thumb} alt="img" /> */}
                {/* <img src="/images/mission_img.jpg" alt="img" /> */}
                <img src="/images/compliance.jpg" alt="img" />
              </div>
              <div className="mission__content">
                <div className="section__title section__title-two mb-20">
                  <span className="sub-title">
                    Compliance & Risk Management Services
                  </span>
                  {/* <h2 className="title">
                    Ensuring compliance with international standards is
                  </h2> */}
                  <p className="text-justify [text-align:justify]">
                    We provide expert documentation services to ensure accuracy,
                    compliance, and efficiency.
                  </p>
                </div>
                <p>
                  Ensuring compliance with international standards is essential
                  for business sustainability. We provide:
                </p>

                <div className="about__list-box about__list-box-two about__list-box-three">
                  <ul className="list-wrap">
                    <li>
                      ✔ Regulatory Compliance Consulting – Align with industry
                      and legal requirements.
                      {/* <i className="flaticon-check"></i>Internal Audits Assess
                      your management systems for effectiveness and compliance. */}
                    </li>
                    <li>
                      ✔ Anti-Bribery & Corruption Policy Implementation –
                      Strengthen ethical business practices.
                      {/* <i className="flaticon-check"></i>External Audits –
                      Prepare for third-party certification with confidence. */}
                    </li>
                    <li>
                      ✔ Risk Assessment & Mitigation Strategies – Proactively
                      manage potential risks.
                      {/* <i className="flaticon-check"></i>Supplier & Vendor Audits
                      – Verify compliance and quality within your supply chain. */}
                    </li>
                    {/* <li>
                      ✔ Gap Analysis – Identify weaknesses and areas for
                      improvement before certification.
                    
                    </li> */}
                  </ul>
                </div>
                <div className="shape">
                  <Image src={shape} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
