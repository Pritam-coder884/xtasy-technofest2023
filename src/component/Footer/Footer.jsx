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
                <p className="righty">7684811743</p>
            </p>
        </div>
        <div className="right">
            <p>Designed & devoloped with ❤️</p>
            <p>by <a href='https://instagram.com/zairza.outr?igshid=YmMyMTA2M2Y=' target='_blank' className='zairza'>zairza</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
