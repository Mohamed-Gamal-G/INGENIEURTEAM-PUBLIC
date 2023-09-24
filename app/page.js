"use client"
/* import Image from 'next/image' */
import Header from './components/Header'
import Navbar from './components/Navbar'
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import React from 'react';

export default function Home() {
  return (
    <div>
       <Header />
        <Navbar />
    <main className=" Home flex flex-col items-center justify-between mt-32">
      <section className="section1 flex items-center justify-between">
        <div className="left_side w-5/12 relative">
          <h1 className="text-6xl font-semibold tracking-normal text-left">Engineering
            <Image className=" ARROW inline-block ne mt-12 absolute" src={"/ARROW.png"} width={246} height={180} alt="An arrow pointing to the blue car" />
            <br />
          office in <span className="Cologne">Cologne</span></h1>
          <Link className="Book inline-block text-base font-semibold leading-5 tracking-normal text-left" href={"#"}>Book an Appointment</Link>
          <div className="Find text-base font-medium leading-5 tracking-normal text-left">
          Find us on Google map:
          <Link className="google-mapsContiner flex items-center mt-6 font-semibold" href={"https://www.google.com/maps/search/Ingenieurteam/@52.3443994,13.4557469,10z?entry=ttu"} target="_blank">
            <Image className="google-maps" src={"/google-maps-2020-icon 1.png"} alt="google map Icon" width={48} height={48} /><span className="Google">Google </span> Maps
          </Link>
          </div>
        </div>
        <div className="right_side w-7/12">
          <Image className="pt-10" src={"/image 1.png"} alt="blue car" width={1013} height={434} />
        </div>
      </section>
      <section className="section2 grid mt-32">
        <div className="item flex items-center justify-center">
          <Image className="block mr-5" src={"/Map Point1.png"} width={24} height={24} alt="map icon" />
          <div className="detalis flex flex-col ">
            <span className="text-base font-semibold leading-6 tracking-normal text-left">Location</span>
            <Link className=" Cologne text-sm font-normal leading-5 tracking-normal text-left" href={"#"}>Cologne</Link>
          </div>
        </div>
        <div className="item flex items-center justify-center">
          <Image className="block mr-5" src={"/Calendar Minimalistic.png"} width={24} height={24} alt="Calendar icon" />
          <div className="detalis flex flex-col ">
            <span className="text-base font-semibold leading-6 tracking-normal text-left">Location</span>
            <Link className="Cologne text-sm font-normal leading-5 tracking-normal text-left" href={"#"}>Cologne</Link>
          </div>
        </div>
        <div className="item flex items-center justify-center">
          <Image className="block mr-5" src={"/Transmission Square.png"} width={24} height={24} alt="Transmission Square icon" />
          <div className="detalis flex flex-col ">
            <span className="text-base font-semibold leading-6 tracking-normal text-left">Location</span>
            <Link className="Cologne text-sm font-normal leading-5 tracking-normal text-left" href={"#"}>Cologne</Link>
          </div>
        </div>
        <Link href={"#"} className="Book text-xs font-medium leading-4 tracking-normal text-left">Book an Appointment</Link>
      </section>
      <section className="section3">
        <h2 className="text-6xl font-semibold tracking-normal text-left">Our services</h2>
        <div className="items mt-28">
          <div className="item">
            <Image src={"/Image.png"} width={510} height={279} alt="Read car in street"/>
            <div className="item_continer">
              <h3 className="text-2xl font-semibold leading-7 tracking-normal text-left">Change acceptances</h3>
              <p>
              Special wheels, spoilers, or would it rather be a chassis
              <br />
              change? Our test engineers assess and document the
              <br />
              changes for you in accordance with the regulations.
              </p>
              <Link href={"/Services"}>Descriptive</Link>
            </div>
          </div>
          <div className="item">
            <Image src={"/Image (1).png"} width={510} height={279} alt="Car engine"/>
            <div className="item_continer">
              <h3 className="text-2xl font-semibold leading-7 tracking-normal text-left">Inspection</h3>
              <p>
              Is your general inspection due? Our test engineers, like
              <br />
              our competitors from TÜV and Dekra, are authorized to
              <br />
              carry out the HU both in our test center and in our bases.
              </p>
              <Link href={"/Services"}>Descriptive</Link>
            </div>
          </div>
          <div className="item">
            <Image src={"/Image (2).png"} width={510} height={279} alt="A car with an empty tire"/>
            <div className="item_continer">
              <h3 className="text-2xl font-semibold leading-7 tracking-normal text-left">Accident and valuation reports</h3>
              <p>
              If you have been involved in an accident through no
              <br />
              fault of your own, we offer you to prepare an
              <br />
              independent damage report so that you can enforce
              <br />
              your right to compensation.
              </p>
              <Link href={"/Services"}>Descriptive</Link>
            </div>
          </div>
          <div className="item">
            <Image src={"/Image (3).png"} width={510} height={279} alt="Classic wite car"/>
              <div className="item_continer">
              <h3 className="text-2xl font-semibold leading-7 tracking-normal text-left">Classic car – report</h3>
              <p>
              Is your vehicle older than 30 years and largely in its
              <br />
              original condition? Our test engineers also carry out
              <br />
              classic car inspections in accordance with Section 23
              <br />
              StVZO.
              </p>
              <Link href={"/Services"}>Descriptive</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <Link href={"/Services"} className="text-base font-medium leading-6 tracking-normal text-left flex items-center">Go to the services page <i className='bx bx-right-arrow-alt'></i></Link>
        <Image className="brands" src={"/Car brands.png"} width={2500} height={300} alt="brands cars Icons "/>
      </section>
      <section className="section5">
        <h4 className="text-6xl font-semibold tracking-normal text-left">Our work</h4>
        <div className="items">
          <Image src={"/img.png"} width={400} height={520} alt="General inspections and safety img"/>
          <Image src={"/img (1).png"} width={400} height={520} alt="Gas system tests according img"/>
          <Image src={"/img (2).png"} width={400} height={520} alt="Emissions tests according to img"/>
        </div>
      </section>
      <section className="section6 pt-32 w-full">
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
      <section className="section7 pt-32">
      <Link  className="google-mapsContiner flex items-center mt-6 mb-10 font-semibold" href={"https://www.google.com/maps/search/Ingenieurteam/@52.3443994,13.4557469,10z?entry=ttu"} target="_blank">
            <Image className="google-maps" src={"/google-maps-2020-icon 1.png"} alt="/google-maps-2020-icon" width={48} height={48} /><span className="Google">Google </span> Maps
          </Link>
          <div className="w-full rounded-md overflow-hidden ">
          <iframe title='Our branches on Google map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d155446.30394359367!2d13.48677516580641!3d52.49998195434985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIngenieurteam!5e0!3m2!1sar!2seg!4v1695209283831!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <Footer />
    </main>
    </div>
  )
}