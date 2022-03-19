import React, { useEffect, useState } from 'react'
import './Nav.css'


export const Nav = () => {

  const [handleShow, setHandleShow] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHandleShow(true)
      } else {
        setHandleShow(false)
      }
    })

    return () => {
      window.removeEventListener("scroll")
    }

  }, [])

  return (
    <div className={`nav ${handleShow && 'nav_black'}`}>

      <img className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />

    </div>
  )
}

