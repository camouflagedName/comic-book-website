import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import ContactComponent from "../components/ContactComponent"

const AboutPage = () => (
    <Layout>
        <ContactComponent />
    </Layout>
)

export const Head = () => <Seo title="About" description="Your description"></Seo>

export default AboutPage