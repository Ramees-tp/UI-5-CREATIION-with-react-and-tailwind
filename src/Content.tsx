import React from 'react'

import icon1 from '../src/assets/shine.png'
import icon2 from '../src/assets/delivery.png'
import icon3 from '../src/assets/package.png'
import icon4 from '../src/assets/24-hours.png'

function Content() {
  return (
    <div className='c1'>
      <div className='container'>
        <div className='back'>
            <h1>Fall into fall</h1>
            <h1>Spring flower collection</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi </p>
           
        </div>
        <div className='sec22'>

           <div className='main'>
            <p><img src={icon1} alt="" /></p>
           <div className='divs'>
                <h6>Freshness</h6><p>Fresh from our fields</p>
            </div>
           </div>
           <div className='main'>
            <p><img src={icon2} alt="" /></p>
           <div className='divs'>
                <h6>Free delivery</h6><p>On at orders above $50</p>
            </div>
           </div>
           <div className='main'>
            <p><img src={icon3} alt="" /></p>
           <div className='divs'>
                <h6>Safety package</h6><p>Quick delivery</p>
            </div>
           </div>
           <div className='main'>
            <p><img src={icon4} alt="" /></p>
           <div className='divs'>
                <h6>Support 24/7</h6><p>100% seccure support</p>
            </div>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Content
