import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
function About() {
  return (
    <div className='About'>

        <Header />
        <Navbar />
        <section className='Asection flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-semibold tracking-normal text-center mt-32 pb-10'>About us</h1>
            <p className='text-base font-medium leading-6 tracking-normal text-center mb-40'>
            Learn more about what it means to be a Ingenieurteam
            <br />
            customer by starting your quote today
            </p>
        </section>
        <section className='Asection2 p-10 flex items-center justify-between'>
            <h2 className='text-4xl font-medium tracking-normal text-left w-6/12'>
            Hi, we’re INGENIEURTEAM
            <br />
            We’re provide a professional
            <br />
            car services across
            <br />
            the Germany
            </h2>
            <p className='w-6/12 text-xl font-normal leading-8 tracking-normal text-left'>
            Lorem ipsum dolor sit amet consectetur. Morbi amet
            <br />
            consequat pellentesque tellus. Mattis viverra id sed pretium 
            <br />
            viverra nisl massa neque nulla. Volutpat nunc sapien faucibus 
            <br />
            consectetur integer in nulla.
            <br />
            <br />
            Ut massa sed urna sollicitudin urna et. Semper quam dui
            <br />
            tortor interdum amet imperdiet sagittis.
            <br />
            <br />
            Ut massa sed urna sollicitudin urna et. Semper quam dui
            <br />tortor interdum amet imperdiet sagittis.
            </p>
        </section>
        <section className='Asection3 mb-32'>
            <div className='items'>
                <div className='item'>
                    <Image src={"/About/Frame 388.png"} width={290}height={290}/>
                    <h3 className='text-xl font-semibold leading-7 tracking-normal text-left'>Alex</h3>
                    <span>Master straightener</span>
                </div>
                <div className='item'>
                    <Image src={"/About/Frame 389.png"} width={290}height={290}/>
                    <h3 className='text-xl font-semibold leading-7 tracking-normal text-left'>James</h3>
                    <span>Master straightener</span>
                </div>
                <div className='item'>
                    <Image src={"/About/Frame 390.png"} width={290}height={290}/>
                    <h3 className='text-xl font-semibold leading-7 tracking-normal text-left'>Wërner  </h3>
                    <span>Chief engineer</span>
                </div>
                <div className='item'>
                    <Image src={"/About/Frame 391.png"} width={290}height={290}/>
                    <h3 className='text-xl font-semibold leading-7 tracking-normal text-left'>Frank</h3>
                    <span>Master straightener</span>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default About