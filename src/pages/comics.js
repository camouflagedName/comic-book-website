import React from "react";
import Layout from "../components/layout";
import ComicsComponent from "../components/ComicsComponent";
import Seo from "../components/seo";


const ComicsPage = () => (
    <Layout>
        <ComicsComponent />
    </Layout>
)

export const Head = () => <Seo title="Comic" description="Your description"></Seo>

export default ComicsPage;