import React from 'react'
import "./Main.css"

function Main() {
  return (
      <div className='main-container'>
          <div className='image-container'>
              <div className='fixed-logo'>
                  <div className='logo'></div>
                  <p>The Earthly Décor</p>
              </div>
              <div className='text-main'>
              <h1>The style that enhances the beauty of your home</h1>
              <button>Get Started</button>
              </div>
          </div>
      </div>
  )
}

export default Main