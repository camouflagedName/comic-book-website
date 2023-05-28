import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { Button, Card } from "flowbite-react"


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <div className="my-auto">
    <main>
      <Card>
        <h5 id="page-title" className="text-6xl font-medium tracking-tight text-gray-900 dark:text-purple-200 text-center">
          The Odyssey of Izarynne
        </h5>
        <div className="flex flex-row">
          <StaticImage
            src="../images/preview.png"
            loading="lazy"
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
            className="h-auto rounded-lg w-4/5 mx-auto"
          />
        </div>
        <h6 className="text-4xl tracking-tight text-gray-900 dark:text-purple-200 text-center mb-3">A new comic book by Simon Conway</h6>
        <div className="mx-auto">
          <Link
            to="/comics"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2"
          >
            <span className="text-xl">Click to Enter</span>
          </Link>
        </div>
      </Card>
    </main>
  </div>
)
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Main" description="Your description"></Seo>


export default IndexPage
