import { useDispatch } from "react-redux"
import { addProduct } from "../redux/actions"
import { useEffect, useState } from "react"
import axios from "axios"
import Carousel from "./Slide"

const Products = ({ addedProducts, setAddedProducts }) => {

  const [products, setProducts] = useState({})
  const [Item, setItem] = useState({})
  const dispatch = useDispatch()

  // json-server --port 3030 --watch data/data.json 

  useEffect(() => {
    axios.get("http://localhost:3030/products")
      .then(response => setProducts(response.data))
  }, [])

  useEffect(() => {
    const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
    setAddedProducts(addedProductIds);
  }, []);

  const handleAddProduct = (id, title, image, price) => {
    dispatch(addProduct(id, title, image, price))
    setAddedProducts([...addedProducts, id])
    localStorage.setItem('addedProductIds', JSON.stringify([...addedProducts, id]));
  }



  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" mb-20">
          <Carousel />
        </div>
        <h2 className="text-5xl font-bold text-[#A47249] text-center ">Products </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
          {products[0] && products.map((p, i) =>
            <div className="max-w-xs rounded-md shadow-md bg-w text-gray-800" key={i}>
              <img src={p.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-wide">{p.title}</h2>
                  <h2 className="text-gray-700 "  >{p.price} DH</h2>
                </div>
                {!addedProducts.includes(p.id) ? (
                  <button onClick={() => handleAddProduct(p.id, p.title, p.price, p.image)} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#B64E18] hover:bg-[#A47249] dark:text-white" >
                    Add to cart
                  </button>
                ) : (
                  <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  dark:bg-[#FFE7CE] dark:text-white" disabled >
                    Added to cart
                  </button>
                )}


              </div>
            </div>






          )}
        </div>
      </div>
    </div>


    /*
    
     */








  )
}

export default Products;
