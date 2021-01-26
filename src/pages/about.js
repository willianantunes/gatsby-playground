// import React from "react"
// import Header from "../components/header"
// import Layout from "../components/layout"

// export default function About() {
//   return (
//     <div style={{ color: `teal` }}>
//       <Header headerText="About Gatsby" />
//       <Header headerText="It's pretty cool" />
//       <p>Such wow. Very React.</p>
//     </div>
//   )
// }

// export default function About() {
//   return (
//     <Layout>
//     <div>
//       <h1>About me</h1>
//       <p>
//         I’m good enough, I’m smart enough, and gosh darn it, people like me!
//       </p>
//     </div>
//     </Layout>
//   )
// }


import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About Pandas Eating Lots</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}
