import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left">
            <h2>For further details contact : </h2>
            <p className="row">
                <p className="lefty">xtasy.2023@outr.in</p>
                <p className="righty">1234567890</p>
            </p>
        </div>
        <div className="right">
            <p>Designed & devoloped with ❤️</p>
            <p>by <a href='zairza.in' className='zairza'>zairza</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
