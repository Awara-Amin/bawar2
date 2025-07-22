// import Image from "next/image"
// import cta_img from "@/assets/img/images/cta_img.jpg"
// import cta_img from "@/assets/img/images/cta_img.png"

// import InjectableSvg from "@/components/common/InjectableSvg"
// import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta__area-two section-pb-100">
      <div className="container">
        <div className="cta__wrap-two cta__wrap-three">
          <div className="cta__img">
            {/* <Image src={cta_img} alt="img" /> */}
            <img src="/images/cta_img.png" alt="img" />
          </div>
          <div className="cta__content-two cta__content-three">
            <div className="content__left">
              <h2 className="title">Get Certified Today!</h2>
              <p>
                Take your business to the next level with internationally
                recognized ISO certification. Contact us today for a free
                consultation and let’s build a stronger, more compliant future
                for your organization..
              </p>
            </div>
            {/* <div className="cta__btn-two cta__btn-three">
              <Link href="/contact" className="btn">
                Read More{" "}
                <InjectableSvg
                  src="/assets/img/icon/right_arrow.svg"
                  alt=""
                  className="injectable"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
