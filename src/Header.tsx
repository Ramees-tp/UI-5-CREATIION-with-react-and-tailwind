import React from 'react'

function Header() {
  return (
    <div className='c1'>
      <div className='container'>
         <div className='sec1'>
            <h2><span>Florist</span> Logo</h2>
         </div>
         <div className='sec2'>
         <ul className="nav justify-content-center">
  <li className='search'>
    <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</i>
    <a className="nav-link" href="#">Search</a>
  </li>
      <span className='flex1'></span>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Shop</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
  <span className='flex1'></span>
  <li className='search'>
    <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</i>
<a className="nav-link" href="#">Cart</a>
  </li>
</ul>
         </div>
        </div>
    </div>
  )
}

export default Header
