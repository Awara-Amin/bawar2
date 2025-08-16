"use client"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react"
// import Image from "next/image"
import ServiceSidebar from "./ServiceSidebar"

interface DataType {
  id: number
  page: string
  // img?: StaticImageData
  img?: string
  icon: string
  title: string
  desc: string
  list?: string[]
}
import { useInView } from "react-intersection-observer"

const ServiceDetailsArea = () => {
  const service_data: DataType[] = [
    {
      id: 1,
      page: "home_4",
      // img: service_1,
      // img: "/images/services_img08.jpg",
      img: "/images/mane.jpg",
      icon: "flaticon-delivery-man",
      title: "ISO 9001:2015 Certification - Quality Management System",
      desc: "Achieve internationally recognized quality standards with ISO 9001:2015 certification. Our certification process ensures your organization meets the highest Quality Management System (QMS) requirements, improving efficiency, customer satisfaction, and regulatory compliance. We provide end-to-end support, from documentation to implementation and certification. Strengthen your business credibility and gain a competitive edge with our professional ISO certification services.",
    },
  ]
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  })

  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="services__details-area section-py-130">
        <div className="container">
          <div className="services__details-inner">
            <div className="row">
              <div className="col-70 order-0 order-lg-2">
                <div className="services__details-thumb">
                  {service_data[0]?.img && (
                    <img
                      src={service_data[0].img}
                      alt={service_data[0].title}
                      width={500}
                      height={300}
                    />
                  )}

                  {/* <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                  /> */}
                </div>
                <div className="services__details-content">
                  <h2 className="title">{service_data[0].title}</h2>
                  <p style={{ textAlign: "justify" }}>{service_data[0].desc}</p>
                  <div className="services__details-content-inner">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <h2 className="title-two">
                          We provide power and confidence to your business
                        </h2>
                        <p>
                          With over nearly fifteen years experience providing
                          certification to largee companies throughout Kurdistan
                          and Iraq.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="progress__wrap progress__wrap-three"
                          ref={ref}
                        >
                          <div className="progress__item progress__item-three">
                            <div className="progress__item-top">
                              <h3 className="progress__title">
                                Successful Delivery
                              </h3>
                              <div className="progress-value">
                                <span className="counter-number">82</span>%
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{
                                  width: "82%",
                                  animation: inView
                                    ? "animate-positive 1.8s"
                                    : "none",
                                  opacity: inView ? "1" : "0",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div className="progress__item progress__item-three">
                            <div className="progress__item-top">
                              <h3 className="progress__title">
                                Happy Customers
                              </h3>
                              <div className="progress-value">
                                <span className="counter-number">90</span>%
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{
                                  width: "90%",
                                  animation: inView
                                    ? "animate-positive 1.8s"
                                    : "none",
                                  opacity: inView ? "1" : "0",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
    </>
  )
}

export default ServiceDetailsArea
