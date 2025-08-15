// import Image from "next/image"
// import about_1 from "@/assets/img/images/inner_about_img01.jpg"
// import about_2 from "@/assets/img/images/inner_about_img02.jpg"
// import about_1 from "@/assets/img/images/iso-4.jpg"
// import about_1 from "@/assets/img/images/inner_about_img0111.jpg"

// import about_2 from "@/assets/img/images/inner_about_img011.jpg"

const AboutArea = () => {
  return (
    <section className="about__area-two section-py-120">
      <div className="container">
        <div className="row align-items-center justify-content-center gutter-24">
          <div className="col-lg-6 col-md-9">
            <div className="about__img-two">
              {/* <Image
                src={about_1}
                alt="img"
                data-aos="fade-right"
                data-aos-delay="400"
              /> */}
              <img
                src="/images/vendor.jpg"
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
                <span className="sub-title">
                  Vendor Registration Support Services
                </span>
                {/* <h2 className="title">
                  We assist companies in registering and managing their profiles
                  on procurement and compliance platforms such as:
                </h2> */}
              </div>
              {/* <p className="info-one">
                We assist companies in registering and managing their profiles
                on procurement and compliance platforms such as:
              </p> */}
              <div className="about__content-inner">
                <div className="about__list-box about__list-box-two">
                  <ul className="list-wrap">
                    <li>
                      ✔ Assist companies in registering and managing profiles
                      on procurement and compliance platforms, including
                    </li>
                    <li>
                      <i className="flaticon-check"></i> SAM.gov (U.S.
                      Government Vendor Registration)
                    </li>
                    <li>
                      <i className="flaticon-check"></i>ISNetworld (ISN)
                    </li>
                    <li>
                      <i className="flaticon-check"></i>SAP Ariba
                    </li>
                    <li>
                      ✔ Provide professional support in completing
                      registrations and ensuring compliance with regulatory and
                      procurement requirements.
                    </li>
                    <li>
                      ✔ Optimize profiles for greater contract eligibility.
                    </li>
                    <li>
                      ✔ Help businesses access government contracts,
                      international supply chains, and corporate procurement
                      networks.
                    </li>
                    <li>
                      ✔ Simplify registration processes and expand market reach
                      globally.
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
              <p>
                Note: We are a third-party service provider and not affiliated
                with or endorsed by SAM.gov, ISNetworld, or SAP Ariba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea
