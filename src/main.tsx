import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header'
import './Header.css'
import Content from './Content'
import './Content.css'

import Footer from './Footer'
import './Footer.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
