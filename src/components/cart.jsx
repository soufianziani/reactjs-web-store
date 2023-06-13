import { useSelector, useDispatch } from "react-redux"
import { removeProduct, incrementQnt, decrementQnt, emptyCart } from "../redux/actions"
import { useEffect, useState } from "react"

const Cart = ({ addedProducts, setAddedProducts }) => {

  
    const cart = useSelector(state => state.cart)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setTotal(
            cart.map((product) => product.price * product.quantity).reduce((total, price) => total + parseFloat(price), 0)
        )
    }, [cart])

    useEffect(() => {
        const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
        setAddedProducts(addedProductIds);
    }, []);

    const handleIncrement = (product) => {
        dispatch(incrementQnt(parseFloat(product.id)))
        setTotal(prev => prev + parseFloat(product.price))
    }

    const handleDecrement= (product) => {
        dispatch(decrementQnt(parseFloat(product.id)))
        setTotal(prev => prev - parseFloat(product.price))
    }

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id))
        const addedProductIds = JSON.parse(localStorage.getItem('addedProductIds') || '[]');
        const updatedAddedProducts = addedProductIds.filter(productId => productId !== id);
        localStorage.setItem('addedProductIds', JSON.stringify(updatedAddedProducts));
        setAddedProducts(updatedAddedProducts);
    }

    const handleEmptyCart = () => {
        dispatch(emptyCart())
        localStorage.removeItem('addedProductIds');
        setAddedProducts([]);
    }

    return (
        <div className=" min-h-screen">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-5 text-gray-800">Your Cart</h1>
          <button onClick={handleEmptyCart} className="bg-red-500 text-white py-2 px-4 rounded-md mb-5 text-sm font-semibold tracking-wider hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Clear Cart</button>
          {cart.length === 0 && (
            <p className="text-lg text-center text-gray-600 font-medium">Your cart is currently empty.</p>
          )}
          {cart.length > 0 && (
            <>
              {cart.map((product, index) => (
                <div key={index} className="bg-white  rounded-md overflow-hidden mb-5 border border-[#A47249] ">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img src={product.image} alt={product.title} className="h-24 w-24 object-contain" />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-base text-gray-600">${product.price.toFixed(2)} x {product.quantity}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveProduct(product.id)} className="bg-red-500 text-white py-1 px-3 rounded-md text-sm font-semibold tracking-wider hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mr-1" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
  </svg>
  <span>Remove</span>
</button>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => handleDecrement(product)} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md text-sm font-semibold tracking-wider hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">-</button>
                      <span className="text-xl font-semibold text-gray-800">{product.quantity}</span>
                      <button onClick={() => handleIncrement(product)} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md text-sm font-semibold tracking-wider hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">+</button>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <p className="text-2xl font-semibold mb-3 text-gray-800">Total: ${total.toFixed(2)}</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md text-lg font-semibold tracking-wider hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Checkout</button>
            </>
          )}
        </div>
      </div>
      
    )
}

export default Cart;
