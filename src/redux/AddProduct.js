import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

function AddProduct() {
  const [products, setProducts] = useState([])
  const [allFieldsFilled, setAllFieldsFilled] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3030/products")
      .then(response => setProducts(response.data))
  }, [])

  const idRef = useRef(null)
  const titleRef = useRef('')
  const imageRef = useRef('')
  const priceRef = useRef(0)

  const handleInputChange = () => {
    // Check if all fields have a value
    if (idRef.current.value && titleRef.current.value && imageRef.current.value && priceRef.current.value) {
      setAllFieldsFilled(true)
    } else {
      setAllFieldsFilled(false)
    }
  }

  const ajouter = () =>{
    const newProduct = {
      id: parseInt(idRef.current.value),
      title: titleRef.current.value,
      image: imageRef.current.value,
      price: parseFloat(priceRef.current.value),
    }
    axios.post("http://localhost:3030/products", newProduct)
      .then(response => {
        setProducts([...products, response.data])
        // Clear the input fields after successfully adding the product
        idRef.current.value = ''
        titleRef.current.value = ''
        imageRef.current.value = ''
        priceRef.current.value = 0
        // Reset the form state
        setAllFieldsFilled(false)
        // Display success message
        alert("Product added successfully!")
      })
     
  }

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Add a Product</h1>
      <div className="flex flex-col space-y-4">
        <input ref={idRef} type="number" placeholder="ID" class="w-full rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 outline-none py-2 px-3 leading-5 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
        <input ref={titleRef} type="text" placeholder="Title" class="w-full rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 outline-none py-2 px-3 leading-5 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
        <input ref={imageRef} type="text" placeholder="Image URL" class="w-full rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 outline-none py-2 px-3 leading-5 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
        <input ref={priceRef} type="number" step="0.01" placeholder="Price" class="w-full rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 outline-none py-2 px-3 leading-5 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
        <button onClick={ajouter} disabled={!allFieldsFilled} className={`bg-[#B64E18] hover:bg-[#B64E18] px-4 py-2 rounded-md ${allFieldsFilled ? 'text-white cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}>Ajouter</button>
      </div>
    </div>
  </div>
  
  )
}

export default AddProduct
