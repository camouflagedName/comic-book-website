import { Card } from "flowbite-react"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import comicBooks from "../comicBooks"
import useImage from "../hooks/useImage"

/* 
const ComicsComponentALT = () => {
    const [itemsArr, setItemsArr] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const loadComicProducts = async () => {
            const loadedProducts = await Promise.all(
                comicBooks.map(async ({ title, imgSrc, price, description, short }) => {
                    const img = await import(imgSrc);

                    return <ComicItem title={title} img={img} price={price} description={description} shortURL={short} />
                })
            );
            setItemsArr(loadedProducts);
        }

        loadComicProducts();
    }, [])

    return (
        <div className="flex flex-row gap-4 justify-center">
            {itemsArr}
        </div>
    )
}

*/

const ComicsComponent = () => {

    const comicBookArr: React.ReactNode[] = [];
    for (const id in comicBooks) {
        const item = comicBooks[id];
        comicBookArr.push (
        <ComicItem
            title={item.title}
            img={item.imgSrc}
            price={item.price}
            description={item.description}
            shortURL={item.short}
            key={item.short} />
        )
    }

    return (
        <div className="flex flex-row gap-12 justify-center">
            { comicBookArr }
        </div>
    )
}

export default ComicsComponent;

const ComicItem = ({ title, img, price, description, shortURL }:
    { title: string, img: string, price: number, description: string | undefined, shortURL: string | undefined }) => {
    const imgSrc = useImage(img);

    return (
        <div className="max-w-sm">
            <Link
                to={`/comics/${shortURL}`}>
                <Card>
                    <img src={imgSrc} alt="" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-300 text-center">
                        {title}
                    </h5>
                    <hr />
                    <p className="font-normal text-xl text-gray-700 dark:text-gray-200 text-center">
                        ${price}
                    </p>
                </Card>
            </Link>
        </div>
    )
}