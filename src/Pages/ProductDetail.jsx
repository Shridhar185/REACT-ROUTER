// useParams() is a hook from React Router that lets you access the dynamic parts of the URL.

import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { productId } = useParams()

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Showing details for product ID: {productId}</p>
    </div>
  )
}

export default ProductDetail
