// import Image from "next/image"

interface DataType {
  id: number
  image: string
  title: string
  desc: JSX.Element
}

const feature_data: DataType[] = [
  {
    id: 1,
    image: "/assets/img/services/commu-nternet.svg", // Correct path
    title: "Regional",
    desc: <>IsoCert proudly serves clients all across Iraq.</>,
  },
  {
    id: 4,
    image: "/assets/img/services/quality-award.svg", // Correct path
    title: "Assurance",
    desc: <>We hold government approval, ensuring trust and confidence.</>,
  },
  {
    id: 3,
    image: "/assets/img/services/secure1.svg", // Correct path
    title: "Solutions",
    desc: <>We offer best solutions for challenges at your company</>,
  },
]

const Feature = () => {
  return (
    <section className="features__area section-pb-90">
      <div className="container">
        <div className="features__item-wrap-two">
          <div className="row justify-content-center gutter-24">
            {feature_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    {/* <Image
                      src={item.image}
                      alt={item.title}
                      width={80} // Adjust width
                      height={80} // Adjust height
                      className="feature-img"
                    /> */}
                    <img
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="feature-img"
                    />
                  </div>
                  <div className="features__content">
                    <h2 className="title">{item.title}</h2>
                    <p>{item.desc}</p>
                    <h2 className="number">0{item.id}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature

// interface DataType {
//   id: number
//   icon: string
//   title: string
//   desc: JSX.Element
// }

// const feature_data: DataType[] = [
//   {
//     id: 1,

//     icon: "flaticon-warehouse-1",
//     title: "Warehouse",
//     desc: <>When an unknown printer took a galley typeat better future.</>,
//   },
//   {
//     id: 2,
//     icon: "flaticon-air-freight",
//     title: "Air Freight",
//     desc: <>When an unknown printer took a galley typeat better future.</>,
//   },
//   {
//     id: 3,
//     icon: "flaticon-ship",
//     title: "Ship Cargo",
//     desc: <>When an unknown printer took a galley typeat better future.</>,
//   },
// ]

// const Feature = () => {
//   return (
//     <section className="features__area section-pb-110">
//       <div className="container">
//         <div className="features__item-wrap-two">
//           <div className="row justify-content-center gutter-24">
//             {feature_data.map((item) => (
//               <div key={item.id} className="col-lg-4 col-md-6">
//                 <div className="features__item">
//                   <div className="features__icon">
//                     <i className={item.icon}></i>
//                   </div>
//                   <div className="features__content">
//                     <h2 className="title">{item.title}</h2>
//                     <p>{item.desc}</p>
//                     <h2 className="number">0{item.id}</h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Feature
