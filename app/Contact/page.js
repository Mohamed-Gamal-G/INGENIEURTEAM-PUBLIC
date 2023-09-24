"use client"
import React from 'react';
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
function Contact() {
  return (
    <div className='Contact'>
        <Header />
        <Navbar />
        <section className='Csection flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-semibold tracking-normal text-center'>Contact & Locations</h1>
            <p className='text-base font-medium leading-6 tracking-normal text-center'>Get more iformation regarding our location and working hours</p>
        </section>
        <section className='Csection2'>
            <div className='items'>
              <div className='item'>
                <h2 className='text-xl font-medium leading-5 tracking-normal text-left'>Location#1</h2>
                <div className='details'>
                <Link className='text-right' style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-map'></i>
                Heinrich-Pesch-Str.
                <br />
                <span className='ml-9'>5a 50739 Kölnа</span>
                </Link>
                <br />
                <Link style={{color:"rgba(34, 113, 233, 1)"}} className='lastFooterLinks' href={"/"}>
                <i className='bx bx-phone' ></i>
                    +49 221 57 000 807
                </Link>
                <br />
                <Link style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-time-five' ></i>
                    Mon-Fir, 9:00-19:00
                </Link>
                </div>
                <iframe title='Our branches on Google map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1256.0821784549921!2d6.92619496089024!3d50.97615258176145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHeinrich-Pesch-Str.%205a%2050739%20K%C3%B6ln%D0%B0!5e0!3m2!1sar!2seg!4v1695275824711!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='item'>
                <h2 className='text-xl font-medium leading-5 tracking-normal text-left'>Location#2</h2>
                <div className='details'>
                <Link className='text-right' style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-map'></i>
                Heinrich-Pesch-Str.
                <br />
                <span className='ml-9'>5a 50739 Berlin</span>
                </Link>
                <br />
                <Link style={{color:"rgba(34, 113, 233, 1)"}} className='lastFooterLinks' href={"/"}>
                <i className='bx bx-phone' ></i>
                    +49 221 57 000 807
                </Link>
                <br />
                <Link style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-time-five' ></i>
                Mon-Fir, 9:00-21:00
                </Link>
                </div>
                <iframe title='Our branches on Google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.1642666944235!2d6.9274824227549505!3d50.97615424937265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2ff516b34efb%3A0x89a570688681b4ce!2zSGVpbnJpY2gtUGVzY2gtU3RyYcOfZSA1YSwgNTA3MzkgS8O2bG4sINij2YTZhdin2YbZitin!5e0!3m2!1sar!2seg!4v1695276581721!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='item'>
                <h2 className='text-xl font-medium leading-5 tracking-normal text-left'>Location#3</h2>
                <div className='details'>
                <Link className='text-right' style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-map'></i>
                Heinrich-Pesch-Str.
                <br />
                <span className='ml-9'>5a 50739 Kölnа</span>
                </Link>
                <br />
                <Link style={{color:"rgba(34, 113, 233, 1)"}} className='lastFooterLinks' href={"/"}>
                <i className='bx bx-phone' ></i>
                    +49 221 57 000 807
                </Link>
                <br />
                <Link style={{color:"rgba(40, 40, 40, 1)"}} href={"/"}>
                <i className='bx bx-time-five' ></i>
                    Mon-Fir, 9:00-19:00
                </Link>
                </div>
                <iframe title='Our branches on Google map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1256.0821784549921!2d6.92619496089024!3d50.97615258176145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHeinrich-Pesch-Str.%205a%2050739%20K%C3%B6ln%D0%B0!5e0!3m2!1sar!2seg!4v1695275824711!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </section>
        <div className='CcontactContiner'>
        <section className="section6 pt-32 w-full" style={{background:"rgba(241, 247, 255, 1)",borderRadius:"48px",paddingBottom:"80px"}}>
        <h5 className="text-6xl font-semibold tracking-normal text-center">Contact us</h5>
        <div className="contact flex flex-col items-center justify-center ">
        <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="First name" name="First name" placeholder="First name"/><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="Last name" name="Last name" placeholder="Last name"/><br/>
            <label htmlFor="location">location</label><br/>
            <select aria-label="locations as Standort Berli or PSW Ingenieurteam" name="Location" id="Location" placeholder="Choose location">
            <option hidden selected="selected">Choose location</option>
              <option value="Standort Berlin">Standort Berlin</option>
              <option value="PSW Ingenieurteam">PSW Ingenieurteam</option>
              <option value="Versorgungstechnik GmbH">Versorgungstechnik GmbH</option>
              <option value="HM Ingenieure">HM Ingenieure</option>
            </select>
            <br />
            <label htmlFor="service">service</label><br/>
            <select name="service" id="service" placeholder="Choose service">
            <option aria-label="Choose service like Inspection or Emissions and more" hidden selected="selected">Choose service</option>
              <option value="Inspection">Inspection</option>
              <option value="Emissions">Emissions</option>
              <option value="Safety systems">Safety systems</option>
              <option value="audi">Documents</option>
              <option value="Gas">Gas</option>
              <option value="Liquid">Liquid</option>
              <option value="Classic cars">Classic cars</option>
              <option value="UVV">UVV</option>
              <option value="Used cars">Used cars</option>
            </select>
            <input className="mt-8 Send text-base font-semibold leading-4 tracking-normal text-left" type="submit" value="Send"/>
          </form>
          <br />
            <p className="mt-8 text-xs font-normal leading-4 tracking-normal text-left">
            If you have a technical question, please always provide us with your contact details - even if you
            <br />
            are already our customer. In order to quickly forward your request to the right place, as well as
            <br />
            for any questions, it is very helpful for us to provide us with your place of residence and your
            <br />
            telephone number. Thank you.
            </p>
          </div>
      </section>
        </div>
        <Footer />
    </div>
  )
}

export default Contact