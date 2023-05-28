import { Footer } from "flowbite-react"
import React from "react"


const FooterComponent = () => {

    return (
        <div className="mt-auto">
            <Footer container={true}>
                <Footer.Copyright href="#" by="Simon Conway" year={new Date().getFullYear()} />
                <Footer.LinkGroup>
                    <Footer.Link href="#"> About </Footer.Link>
                    <Footer.Link href="#"> Privacy Policy </Footer.Link>
                    <Footer.Link href="#"> Licensing </Footer.Link>
                    <Footer.Link href="#"> Contact </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    )
}

export default FooterComponent;