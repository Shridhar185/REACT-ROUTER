/* 
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}

export default Contact
 */






// Outlet ______________________________
// It’s a special placeholder component in React Router.
// It tells where to show the child (nested) page inside the parent component.


import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>

      {/* Links to nested routes */}
      <div>
        <Link to="login">Login</Link> |{" "}
        <Link to="register">Register</Link>
      </div>

      <Outlet /> {/* Nested components will appear here */}
    </div>
  )
}

export default Contact
