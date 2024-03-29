import React, { useContext, useState } from 'react';
import Layout from "../components/Layout"
import { Breadcrumb, Card, TextInput } from "flowbite-react"
import { Button } from "flowbite-react"
import useImage from "../hooks/useImage"
import { ICartContext, IComicBook } from '../interfaces/interfaces';
import Seo from "../components/seo"
import { CartContext } from '../context/CartContext';

interface IPageContext {
  comic: IComicBook
}

const ComicTemplate = ({ pageContext }: { pageContext: IPageContext }) => {
  /* static data */
  const { add, remove } = useContext<ICartContext>(CartContext);
  const { comic } = pageContext;
  const imgSrc = useImage(comic.imgSrc);

  /* dynamic data */
  const [productAdded, setProductAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    const newItem = { [comic.id]: quantity };
    if (!productAdded) {
      add(newItem);
    } else remove(newItem);
    setProductAdded(!productAdded);
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    const newQuantity = Number(ev.target.value);
    setQuantity(newQuantity);
  }

  return (
    <Layout size="sm">
      <div className="mx-auto">
        <Card>
          <Breadcrumb
            aria-label="breadcrumb"
            className="bg-gray-50 px-5 py-3 dark:bg-transparent"
          >
            <Breadcrumb.Item href="/comics">
              All Comics
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {comic.title}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className='grid grid-cols-3 gap-2'>
            <div>
              <img src={imgSrc} alt='' className='w-3/5 h-auto rounded-lg' />
            </div>
            <div className='col-span-2'>
              <Card className='text-center'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {comic.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {comic.description} {comic.description} {comic.description}
                </p>
                <hr />
                <p className="text-2xl font-normal text-gray-700 dark:text-gray-400">
                  ${comic.price}
                </p>
                <div className='flex flex-row'>
                  <TextInput type="text" value={quantity} className="w-1/5 mx-auto" onChange={handleChange} />
                  <Button onClick={handleClick} className='mx-auto'>
                    {!productAdded ? "Add to Cart" : "Remove from Cart"}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export const Head = ({ pageContext }: { pageContext: IPageContext }) => <Seo title={pageContext.comic.title} description="Your description"></Seo>
export default ComicTemplate; 