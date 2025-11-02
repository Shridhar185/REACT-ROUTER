/* 
import React from 'react'

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  )
}

export default Product
 */








// For Dynamic Routing ________________________________________________________________

/* 
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="1"><button>Item 1</button></Link>
        <Link to="2"><button>Item 2</button></Link>
        <Link to="3"><button>Item 3</button></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product 
 */









// Dynamic Routing Based on Search _________________________________________________________

import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
  const [searchId, setSearchId] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchId.trim() !== '') {
      navigate(searchId)      // navigates to /products/:searchId
      setSearchId('')         // resets input
    }
  }

  return (
    <div>
      <h1>Products</h1>

      {/* Search box */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter Product ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Quick buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="1"><button>Item 1</button></Link>
        <Link to="2"><button>Item 2</button></Link>
        <Link to="3"><button>Item 3</button></Link>
      </div>

      {/* Display selected product detail */}
      <Outlet />
    </div>
  )
}

export default Product


