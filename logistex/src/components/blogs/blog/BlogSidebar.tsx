import Link from "next/link"
// import BlogLatestPost from "./BlogLatestPost"
// import inner_img from "@/assets/img/blog/h2_blog_img02.jpg"
// import certificate from "@/assets/img/blog/ww.jpg"
// import whatsApp from "@/assets/img/blog/whatsApp.jpg"
// import Image from "next/image"

const BlogSidebar = () => {
  return (
    <div className="col-lg-4">
      <aside className="blog-sidebar">
        {/* <div className="blog-widget widget_search">
               <div className="sidebar-search-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Search here" />
                     <button><i className="flaticon-search"></i></button>
                  </form>
               </div>
            </div> */}
        <div className="blog-widget">
          <h4 className="widget-title">Services</h4>
          <div className="shop-cat-list">
            <ul className="list-wrap">
              <li>
                <Link href="/Industries-We-Serve">
                  ISO Certifications
                  {/* <span>(05)</span> */}
                </Link>
              </li>
              <li>
                <Link href="/who-we-are">
                  Compliance & Risk Management
                  {/* <span>(07)</span> */}
                </Link>
              </li>
              <li>
                <Link href="/risk">
                  Oil & Gas Registration
                  {/* <span>(03)</span> */}
                </Link>
              </li>
              <li>
                <Link href="/isoTraining">
                  Vendor Registration Support
                  {/* <span>(05)</span> */}
                </Link>
              </li>
              {/* <li>
                <Link href="/blog">
                  Cargo Freight <span>(02)</span>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blog">
                  Rail Freight <span>(08)</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <BlogLatestPost /> */}
        <div className="blog-widget ">
          <h4 className="widget-title">Get Certified Today!</h4>
          {/* <Image src={certificate} alt="image" /> */}
          <img src="/images/ww.jpg" alt="img" />
          <p>
            {/* style={{ textAlign: "justify" }} */}
            Take your business to the next level with internationally recognized
            ISO certification.
          </p>
        </div>
        <div className="blog-widget">
          <h4 className="widget-title">Find Out Us On:</h4>
          {/* <Image src={whatsApp} alt="image" /> */}
          <img src="/images/whatsApp.jpg" alt="img" />
          <p className="pt-3">
            Contact us on whatsApp using this number: +964 750 494 6122 today
            for a free consultation. We can build a stronger, more compliant
            future for your organization.
          </p>
          {/* <p> We are open 24/7 for welcoming your call and text messsages</p> */}
          <p>You cal also email us on info@isocert.krd.</p>
        </div>
      </aside>
    </div>
  )
}

export default BlogSidebar
