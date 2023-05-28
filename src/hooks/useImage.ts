import { useEffect, useState } from "react";

function useImage(imgURL: string) {
    const [productImg, setProductImg] = useState("")

    useEffect(() => {
        const getImages = async () => {
            const imageModule = await import(`../images/${imgURL}`)
            setProductImg(imageModule.default);
        }

        getImages();
    }, [])

    return productImg;
}

export default useImage;