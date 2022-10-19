import React from 'react'
import "../src/style.css"
import logo from "./img/logo.png"
import apk from "./LetsPark.apk"
import mobile from "./img/Mobile.png"
import parking from "./img/Parking.png"
import payment from "./img/Payment.png"
import rent from "./img/Rent.png"


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
        <div class="text">
          <h1>The app that will<br></br>
          find your parking<br></br>
          space.</h1>
          <br></br>
          <br></br>
          <p>Parking with ease, seamless payment, and<br></br>
          generate extra income. Meet the app will<br></br>
          bring convenience in parking and will help you<br></br>
          start your parking business.</p>
          </div>
      </section>

      <section className='sec-2'>
         <div class="row">
          <div class="column">
            <img src={parking} alt="parking" width="150px" height="125px" />
           <h1>Book parking space</h1><br></br>
            <p>Choose from large variety of<br></br>
            parking space in Valenzuela. Book,<br></br> 
            park, and carry on with your day.</p>
          </div>
          <div class="column">
          <img src={payment} alt="payment" width="150px" height="125px" />
          <h1>Pay with ease</h1><br></br>
            <p>With Let's park payment is made<br></br>
            easy. With few taps your parking is<br></br> 
           ready to go.</p>
          </div>
          <div class="column"><img src={rent} alt="rent" width="150px" height="125px" />
          <h1>BookRent out your space</h1><br></br>
            <p>Generate extra income by renting<br></br>
            out your space. Follow easy<br></br> 
            instructions and make your day.</p>
          </div>
         </div>
         
      </section>

      <section className='sec-3'>
        <div className='logo-img'>
          <img src={logo} alt="logo" width="500px"/>

        </div>
        <div class="text">
         <h1>Download Let's Park now!</h1>
          <br></br>
          <p>Start by downloading our app and register with few and<br></br>
          easy steps. Try and experience secured and seamless<br></br>
          parking in Valenzuela using Let's Park!
          <button><a href={apk} download>Download</a></button>
          </p>
        </div>
          
      </section>

      <section className='sec-4'>
      </section>

      <section className='sec-5'>
      </section>

      <footer>
        <div className='con-1'>
          <div className='column1'>
            <img src={logo} alt="logo" width="200px"/>
            <h1>Let's Park!</h1>
          </div>
          <div className='column2'>
            <ul>
              <li><a href='/'>Privacy Policy</a></li>
              <li><a href='/'>Terms and Conditions</a></li>
              <li><a href='/'>Guidelines</a></li>
              <button><a href={apk} download>Download</a></button>
            </ul>
          </div>
        </div>
        <div className='con-2'>
          <div>
            <p>Let's Park is an app developed by four students from Pamantasan ng Lungsod ng Valenzuela</p>
          </div>
          <div>
            <p>&#169; Copyright Let's Park! 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
}
