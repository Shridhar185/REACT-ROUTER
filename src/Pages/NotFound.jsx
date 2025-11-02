// useNavigate is a hook provided by React Router (v6+)
// It allows us to move to another page (route) using JavaScript (not just by clicking a <Link>).

import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>404 | Not Found</h1>      <br />
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  )
}

export default NotFound




















