import React from 'react'
import im1 from '../src/assets/rose.jpeg'
import im2 from '../src/assets/rosee.jpeg'
import im3 from '../src/assets/cactus.jpeg'
import im4 from '../src/assets/jamanthi.jpeg'
import im5 from '../src/assets/yellow.jpeg'
import im6 from '../src/assets/lavender.jpeg'

function Footer() {
  return (
    <div>
      <div className='container'>
        <div>
            <div className='sec31'>
                <h1><span>Our</span> category</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='sec32'>
                <div className='floers'>
                    <img className='im1' src={im1} alt="" />
                    <p><b>Popular</b></p>
                </div>
                <div className='floers'>
                <img className='im1' src={im2} alt="" />
                <p><b>Exotic</b></p>
                </div>
                <div className='floers'>
                <img className='im1' src={im3} alt="" />
                <p><b>Cactus</b></p>
                </div>
                <div className='floers'>
                <img className='im1' src={im4} alt="" />
                <p><b>Winter</b></p>
                </div>
                <div className='floers'>
                <img className='im1' src={im5} alt="" />
                <p><b>Daily</b></p>
                </div>
                <div className='floers'>
                <img className='im1' src={im6} alt="" />
                <p><b>Various</b></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
