import Image from "next/image"
// import about_1 from "@/assets/img/images/inner_about_img01.jpg"
// import about_2 from "@/assets/img/images/inner_about_img02.jpg"
import about_1 from "@/assets/img/images/iso-4.jpg"
// import about_1 from "@/assets/img/images/inner_about_img0111.jpg"

// import about_2 from "@/assets/img/images/inner_about_img011.jpg"

const AboutArea = () => {
  return (
    <section className="about__area-two section-py-120">
      <div className="container">
        <div className="row align-items-center justify-content-center gutter-24">
          <div className="col-lg-6 col-md-9">
            <div className="about__img-two">
              <Image
                src={about_1}
                alt="img"
                data-aos="fade-right"
                data-aos-delay="400"
              />
              {/* <Image
                src={about_2}
                alt="img"
                data-aos="fade-up"
                data-aos-delay="600"
              /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-two">
              <div className="section__title section__title-two mb-20">
                <span className="sub-title">ISO Training & Consultation</span>
                <h2 className="title">
                  Enhance your team’s knowledge and skills with expert-led
                  training:
                </h2>
              </div>
              {/* <p className="info-one">
                At ISO, we specialize in ISO certification, compliance, and
                auditing services, helping businesses achieve internationally
                recognized standards. Our mission is to empower organizations
                with robust management systems that drive quality, efficiency,
                and global competitiveness.
              </p> */}
              <div className="about__content-inner">
                <div className="about__list-box about__list-box-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-check"></i> ISO Awareness &
                      Implementation Training
                    </li>
                    <li>
                      <i className="flaticon-check"></i>Lead Auditor & Internal
                      Auditor Training
                    </li>
                    <li>
                      <i className="flaticon-check"></i>Risk-Based Thinking &
                      Process Improvement Workshops
                    </li>
                    {/* <li>
                      <i className="flaticon-check"></i> Experniced and
                      productive
                    </li>

                    <li>
                      <i className="flaticon-check"></i>Secure and Easy To Work
                      With
                    </li> */}
                  </ul>
                </div>
                {/* <div className="about__clients-box">
                  <span>Flexible, Improved & Accelerated Solutions!</span>
                  <div className="counter__item">
                    <div className="counter__icon">
                     
                      <i className="flaticon-parcel"></i>
                    </div>
                    <div className="counter__content">
                      <h2 className="count">
                        <span className="counter-number">10</span> Years
                      </h2>
                      <p>Experience</p>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <p>
                At BSA, we specialize in ISO certification, compliance, and
                auditing services, helping businesses achieve internationally
                recognized standards. Our mission is to empower organizations
                with robust management systems that drive quality, efficiency,
                and global competitiveness. With extensive experience in ISO
                consulting, we ensure a smooth certification process, allowing
                you to focus on growing your business while we handle compliance
                and auditing.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea
