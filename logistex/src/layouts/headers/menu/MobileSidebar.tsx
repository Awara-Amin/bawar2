import Image from "next/image"
import Link from "next/link"

// import logo from "@/assets/img/logo/logo.svg"
// import logo from "@/assets/img/logo/isoCert2.svg"
import logo from "@/assets/img/logo/isoCert-1-red_3.svg"
import NavMenu from "./NavMenu"

interface MobileSidebarProps {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}
const MobileSidebar = ({ isActive, setIsActive }: MobileSidebarProps) => {
  return (
    <div className={isActive ? "mobile-menu-visible" : ""}>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div onClick={() => setIsActive(false)} className="close-btn">
            <i className="tg-flaticon-close"></i>
          </div>
          <div className="nav-logo ">
            <Link href="/">
              <Image src={logo} alt="Logo" width={120} height={40} />
            </Link>
          </div>
          <div className="tgmobile__search">
            {/* <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form> */}
          </div>
          <div className="tgmenu__navbar-wrap tgmenu__main-menu">
            <NavMenu />
          </div>
          <div className="tg-header__top-info tg-header__top-info-two left-side list-wrap">
            {/* <div className="social-links"> */}

            <ul className="list-wrap ">
              <li className="mt-50">
                <i className="flaticon-telephone mr-30"> </i>
                <a href="#" className=" m-30">
                  (+964) 787 4946122
                </a>
              </li>
              <li className="mt-20">
                <i className="flaticon-envelope mr-30 "> </i>
                <a href="#" className=" m-30">
                  info@isocert.krd
                </a>
              </li>

              {/* <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="tgmobile__menu-backdrop"
        onClick={() => setIsActive(false)}
      ></div>
    </div>
  )
}

export default MobileSidebar
