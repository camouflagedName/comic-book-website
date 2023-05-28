import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutComponent from "../components/AboutComponent"

const AboutPage = () => (
    <Layout>
        <AboutComponent />
    </Layout>
)

export const Head = () => <Seo title="About" description="Your description"></Seo>

export default AboutPage