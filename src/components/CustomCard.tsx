import { Card } from "flowbite-react"
import React from "react"

type ColorStyle = 'inherit' | 'initial' | 'transparent' | 'currentColor' | string;

const CustomizedCard = ({ backgroundColor = 'cornflowerBlue', textColor, children }: { backgroundColor?: ColorStyle, textColor?: ColorStyle, children?: JSX.Element }) => {

    return (
        <Card style={{backgroundColor: backgroundColor, color: textColor }}>
            { children }
        </Card>
    )
}

export default CustomizedCard;