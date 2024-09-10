import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
    <div id='row'>
        <div className="block"><Link to="/UploadNews">UploadNews</Link></div>
        <div className="block"><Link to="/UploadGallery">UploadGallery</Link></div>
        <div className="block"><Link to="/DisplayContact">DisplayContact</Link></div>
        <div className="block"><Link to="/">Logout</Link></div>
    </div>
    </div>
  )
}

export default AdminHeader
