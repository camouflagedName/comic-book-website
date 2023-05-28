import { Button, Label, TextInput } from "flowbite-react"
import React from "react"


const ContactComponent = () => {

    return (
        <div className="flex flex-row justify-center">
            <form className="flex flex-col gap-4 w-1/4" >
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput id="email" type="email" placeholder="name@email.com" required={true} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Message" />
                    </div>
                    <TextInput id="message" type="password" required={true} />
                </div>
                <Button className="w-1/4 me-auto" type="submit"> Send </Button>
            </form >
        </div>
    )
}

export default ContactComponent;