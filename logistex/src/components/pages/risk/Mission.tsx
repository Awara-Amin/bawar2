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
                <img src="/images/mission_img.jpg" alt="img" />
              </div>
              <div className="mission__content">
                <div className="section__title section__title-two mb-20">
                  <span className="sub-title">Auditing Services</span>
                  <h2 className="title">A Big Offer for indutry leaders</h2>
                </div>
                <p>
                  We offer a range of auditing solutions to ensure compliance
                  and operational excellence:
                  {/* With over four decades experience providing solutions large
                  scale enterprises throughout the globe we offer endend
                  logistics tailored for specific markets. */}
                </p>
                <div className="about__list-box about__list-box-two about__list-box-three">
                  <ul className="list-wrap">
                    <li>
                      ✔ Internal Audits – Assess your management systems for
                      effectiveness and compliance.
                      {/* <i className="flaticon-check"></i>Internal Audits Assess
                      your management systems for effectiveness and compliance. */}
                    </li>
                    <li>
                      ✔ External Audits – Prepare for third-party certification
                      with confidence.
                      {/* <i className="flaticon-check"></i>External Audits –
                      Prepare for third-party certification with confidence. */}
                    </li>
                    <li>
                      ✔ Supplier & Vendor Audits – Verify compliance and
                      quality within your supply chain.
                      {/* <i className="flaticon-check"></i>Supplier & Vendor Audits
                      – Verify compliance and quality within your supply chain. */}
                    </li>
                    <li>
                      ✔ Gap Analysis – Identify weaknesses and areas for
                      improvement before certification.
                      {/* <i className="flaticon-check"></i>Gap Analysis – Identify
                      weaknesses and areas for improvement before certification. */}
                    </li>
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
