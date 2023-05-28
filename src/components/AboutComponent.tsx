import { Card } from "flowbite-react"
import React from "react"
import useImage from "../hooks/useImage"


const mainBodyTxt = [
    {
        title: "About Izarynne",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "More Details",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "About Simon",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const AboutComponent = () => {

    return (
        <div className="grid grid-cols-3 gap-10">
            {mainBodyTxt.map(({ title, text }, index) =>
                <MainBodyCard title={title} text={text} />
            )}
        </div>
    )
}

export default AboutComponent;


const MainBodyCard = ({ title, text }: { title: string, text: string }) => {
    const imgSrc = useImage("icon.png")
    return (
        <Card >
            <img src={imgSrc} alt="Example" className="h-auto mx-auto rounded-lg" height={55} width={55}/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-300 text-center">
                {text}
            </p>
        </Card>
    )
}