import { Card } from "flowbite-react"
import React, { useEffect, useState } from "react"
//import imgMain from "../images/preview.png";
import { StaticImage } from "gatsby-plugin-image";

const MainComponent = ({ children, size }: { children: JSX.Element, size?: string}) => {
    const [imgSize, setImgSize] = useState('w-1/4');
    //<img src={imgMain} alt="Example" className="h-auto mx-auto rounded-lg"/>

    useEffect(() => {
        if (size) {
            if (size === 'sm') setImgSize('w-1/6');
            else if (size === 'md') setImgSize('w-1/5');
            else setImgSize('w-1/4');
        }
    })

    return (
        <div className="my-auto">
            <main>
                <Card
                className="bg-gradient-to-r from-cyan-600 to-gray-300">
                    <div className="flex flex-row">
                        <StaticImage
                            src="../images/Artboard 1LRG_cropped.png"
                            loading="lazy"
                            quality={85}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                            className={`${imgSize} mx-auto`}
                        />
                    </div>
                    {children}
                </Card>
            </main>
        </div>
    )
}

export default MainComponent;