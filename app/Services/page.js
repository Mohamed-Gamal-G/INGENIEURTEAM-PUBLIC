import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
function services() {
  return (
    <div>
        <Header />
        <Navbar />
        <section className='ssection1'>
            <h1 className='text-6xl font-semibold tracking-normal text-center'>Our services</h1>
        </section>
        <div className='ssection2'>
            <section className="section2 grid mt-10">
            <div className="item flex items-center justify-center">
            <Image className="block mr-5" src={"/Map Point1.png"} width={24} height={24} alt="Map icon" />
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
      </div>
      <section className='ssection3 p-10'>
        <div className='items'>
            <div className='item'>
                <Image src={"/services Icons/Frame 482.png"} width={60} height={60} alt='services Icons1'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Inspection</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>General inspections and safety
                <br />
                checks according to §29 StVZO
                </p>
                <Link href={"#"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (1).png"} width={60} height={60} alt='services Icons2'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Emissions</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Emissions tests according
                <br />
                to §47a StVZO
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (2).png"} width={60} height={60} alt='services Icons3'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Safety systems</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Safety check truck and
                <br />
                KOM according to §29 StVZO
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (3).png"} width={60} height={60} alt='services Icons4'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Documents</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Change approvals according

                <br />
                to §19.3 StVZO
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (4).png"} width={60} height={60} alt='services Icons5'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Gas</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Gas system tests according

                <br />
                to §41a StVZO
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (5).png"} width={60} height={60} alt='services Icons6'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Liquid</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Testing of liquid gas systems in vehicles

                <br />
                in accordance with DVGW G607
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (6).png"} width={60} height={60} alt='services Icons7'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Classic cars</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Expert opinion for classic car classification
                <br />
                according to §23 StVZO (H license plate)
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (7).png"} width={60} height={60} alt='services Icons8'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>UVV</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>UVV tests according

                <br />
                to GUV-V D29
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
            <div className='item'>
                <Image src={"/services Icons/Frame 482 (8).png"} width={60} height={60} alt='services Icons9'/>
                <span className='text-2xl font-semibold leading-7 tracking-normal text-left'>Used cars</span>
                <p className='text-base font-normal leading-6 tracking-normal text-left'>Used car check
                </p>
                <Link href={"/"}>Learn more <i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default services