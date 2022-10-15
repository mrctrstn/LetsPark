import React from 'react'
import "../src/style.css"
import logo from "./img/logo.png"
import apk from "./LetsPark.apk"
import mobile from "./img/Mobile.png"


export default function App() {
  return (
    <>

      <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="logo" width="120px"/>
            <h1>Let's Park!</h1>
        </div>
        <button><a href={apk} download>Download</a></button>
      </div>
    
      <section className='sec-1'>
        <img className='mobile-img' src={mobile} alt="mobile" />
        <div className='img-container'></div>

      </section>

      <section className='sec-2'>
      </section>

      <section className='sec-3'>
      </section>

      <section className='sec-4'>
      </section>

      <section className='sec-5'>
      </section>

      <footer>
      </footer>
    </>
  );
}
