import React, { useContext, useState } from 'react';
import Layout from '../components/layout'
import { Breadcrumb, Card, TextInput } from "flowbite-react"
import { Button } from "flowbite-react"
import useImage from "../hooks/useImage"
import { ICartItem, IComicBook } from '../interfaces/interfaces';
import Seo from "../components/seo"
import { CartContext } from '../context/CartContext';
import comicBooks from '../comicBooks';

interface IPageContext {
  comic: IComicBook
}

const ComicTemplate = ({ pageContext }: { pageContext: IPageContext }) => {
  /* static data */
  const { cart, add, remove } = useContext(CartContext);
  const { comic } = pageContext;
  const imgSrc = useImage(comic.imgSrc);
  //const cart: ICartItem[] = useContext(CartContext)
  //const currentItem: ICartItem = {...comic, quantity: quantity}

  /* dynamic data */
  const [productAdded, setProductAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  //const [currentItem, setCurrentItem] = useState<ICartItem>({...comic, quantity: quantity})

  console.log(cart)
  const handleClick = () => {
    if (!productAdded) {
      add({ ...comic, quantity: quantity })
    } else {
      remove();
    }
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