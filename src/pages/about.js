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
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About ({ data }) {
  return (
    <Layout>
      <h1>About: {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
