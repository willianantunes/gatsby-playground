// import React from "react"
// import Header from "../components/header"
// import { Link } from "gatsby"
// import Layout from "../components/layout"

// export default function Home() {
//   return <div>Hello my friend!</div>
// }

// export default function Home() {
//   return <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>
// }

// export default function Home() {
//   return (
//     <div style={{ color: `purple` }}>
//       <h1>Hello Gatsby!</h1>
//       <p>What a world.</p>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div style={{ color: `purple` }}>
//       <Link to="/contact/">Contact</Link>
//       <Header headerText="Hello Gatsby!" />
//       <p>What a world.</p>
//       <img src="https://source.unsplash.com/random/400x200" alt="" />
//     </div>
//   )
// }

// export default function Home() {
//   return (
//     <Layout>
//       <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//       <p>
//         What do I like to do? Lots of course but definitely enjoy building
//         websites.
//       </p>
//     </Layout>
//   );
// }

import React from "react"
import Layout from "../components/layout"

export default function Home () {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}
