/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// import VideoPopup from "@/modals/VideoPopup"
// import { useState } from "react"
// import Image from "next/image"
import BlogSidebar from "../blog/BlogSidebar"
// import Link from "next/link"
// import BlogPostAuthor from "./BlogPostAuthor"
// import BlogComment from "./BlogComment"

// import blog_details1 from "@/assets/img/blog/blog_details.jpg"
// import blog_details1 from "@/assets/img/blog/indus.jpg"
// import inner_img from "@/assets/img/blog/h2_blog_img02.jpg"

const BlogDetailsArea = ({ single_blog }: any) => {
  //   const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="blog-details-area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__details-wrapper">
                <div className="blog__details-thumb">
                  <img src="/images/indus.jpg" alt="image" />

                  {/* {single_blog?.img ? (
                    <Image src={single_blog.img} alt="image" />
                  ) : (
                    <Image src={blog_details1} alt="image" />
                  
                  )} */}
                </div>
                <div className="blog__details-content">
                  <h3 className="title">
                    {single_blog?.title
                      ? single_blog.title
                      : "Industries We Serve"}
                  </h3>
                  <p>
                    We work with businesses across various industries, helping
                    them achieve certification and compliance excellence. Our
                    expertise spans:
                  </p>

                  <div className="about__list-box about__list-box-three">
                    {/* <ul className="list-wrap"> */}
                    <ul>
                      <li>
                        🏭 <strong>Oil & Gas</strong> – Ensuring safety and
                        quality in high-risk environments.
                      </li>
                      <li>
                        🏗 <strong>Construction & Engineering</strong> – Meeting
                        international safety and environmental standards.
                      </li>
                      <li>
                        🏢 <strong>Corporate & Finance</strong> – Strengthening
                        risk management and information security.
                      </li>
                      <li>
                        🍽 <strong>Food & Beverage</strong> – Implementing
                        robust food safety management systems.
                      </li>
                      <li>
                        🚚 <strong>Logistics & Supply Chain</strong> – Enhancing
                        operational efficiency and compliance.
                      </li>
                      <li>
                        🏥 <strong>Health/Healthcare</strong>–Supporting patient
                        safety, regulatory compliance, and quality management.
                      </li>
                    </ul>
                  </div>

                  <blockquote>
                    <p>
                      “ ISOCERT COMPANY partners with businesses across diverse
                      industries to achieve certification and compliance
                      excellence. ”
                    </p>
                  </blockquote>

                  <div className="blog__details-content-inner">
                    <h4 className="inner-title">Why Choose Us?</h4>
                    <p>
                      Maximus ligula eleifend id nisl quis interdum. Sed
                      malesuada tortor non turpis semper bibendum. Ut ac nisi
                      porta, malesuada risus non viverra dolor. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere.
                    </p>
                  </div>
                  <div className="blog__details-inner-wrap">
                    <div className="row">
                      {/* <div className="col-md-6">
                        <div className="blog__details-inner-img">
                          <Image src={inner_img} alt="img" />
                          <a
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <div className="blog__details-inner-content">
                          {/* <h2 className="inner-title">
                            Conduct Replied Arrived Adapted
                          </h2> */}
                          {/* <p>
                            When An Unknown Printer Took A Galley Type Remaining
                            Essentially Unchan Galley Of Type And Scrambled It
                            To Make A Type Specimen Book.
                          </p> */}
                          <div className="about__list-box about__list-box-three">
                            <ul className="list-wrap">
                              <li>
                                <i className="flaticon-check"></i>Industry
                                Expertise – Years of experience in ISO
                                certification and compliance.
                              </li>
                              <li>
                                <i className="flaticon-check"></i>Tailored
                                Solutions – We customize strategies to fit your
                                business needs.
                              </li>
                              <li>
                                <i className="flaticon-check"></i>End-to-End
                                Support – From consultation to certification, we
                                guide you every step of the way.
                              </li>
                              <li>
                                <i className="flaticon-check"></i>Cost-Effective
                                & Efficient – We streamline the certification
                                process, saving you time and resources.
                              </li>
                              <li>
                                <i className="flaticon-check"></i>Proven Track
                                Record – Trusted by businesses across multiple
                                industries.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="blog__details-bottom">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-md-7">
                        <div className="tg-post-tag">
                          <h5 className="tag-title">Tags :</h5>
                          <ul className="list-wrap p-0 mb-0">
                            <li>
                              <Link href="#">Cargo,</Link>
                            </li>
                            <li>
                              <Link href="#">Shipping,</Link>
                            </li>
                            <li>
                              <Link href="#">Marine</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-5">
                        <div className="tg-post-social justify-content-start justify-content-md-end">
                          <h5 className="social-title">Share :</h5>
                          <ul className="list-wrap p-0 mb-0">
                            <li>
                              <Link href="#">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="fab fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="fab fa-linkedin-in"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="fab fa-pinterest-p"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <BlogPostAuthor /> */}
              {/* <BlogComment /> */}
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      /> */}
    </>
  )
}

export default BlogDetailsArea
