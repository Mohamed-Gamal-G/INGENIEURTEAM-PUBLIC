import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full min-footer'>
        <div className='footer'>
            <div className='item flex flex-col items-center text-left'>
                <span className='logo flex'>
                <Image src={"/ST.png"} width={32} height={24} alt='streng ST logo'/>INGENIEURTEAM
                </span>
                <Link href={"/"} className='TÜV'>
                    TÜV SÜD AUTO PARTNER <br/>
                    IN NEUSS
                    </Link>
                <Link className='Book block text-xs font-medium leading-4 tracking-normal text-left' href={"/"}>Book an Appointment</Link>
            </div>
            <div className='item flex flex-col items-center text-left'>
                <span className='logo flex'>
                Company
                </span>
                <Link href={"/Services"}>Services</Link>
                <Link href={"/"}>Prices</Link>
                <Link href={"/About"}>About us</Link>
                <Link href={"/Contact"}>Contacts</Link>
            </div>
            <div className='item flex flex-col items-center text-left'>
                <span className='logo flex'>
                Legal
                </span>
                <Link href={"#"}>Imprint</Link>
                <Link href={"#"}>Data protection</Link>
            </div>
            <div className='item flex flex-col items-center text-right'>
                <Link style={{color:"#fff"}} target='_blank' href={"https://www.google.com/maps/search/Heinrich-Pesch-Str.+5a+50739+K%C3%B6ln%D0%B0/@50.9761998,6.9251253,243m/data=!3m1!1e3?entry=ttu"}>
                <i className='bx bx-map'></i>
                Heinrich-Pesch-Str.
                <br />
                5a 50739 Kölnа
                </Link>
                <br />
                <Link style={{color:"#fff"}} className='lastFooterLinks' target='_blank' href={"tel:+4922157000807"}>
                <i className='bx bx-phone' ></i>
                    +49 221 57 000 807
                </Link>
                <br />
                <Link style={{color:"#fff"}} href={"#"}>
                <i className='bx bx-time-five' ></i>
                    Mon-Fir, 9:00-19:00
                </Link>
            </div>  
        </div>
        <hr />
        <div className='Continer flex items-center justify-between mt-10 pb-10'>
            <div className='left_side'>
            © ST-Ingenieurteam 2023
            </div>
            <div className='right_side'>
            <div className="iconContiner">
                    <Link aria-label="go to facebook page" target='_blank' href={"https://www.facebook.com/people/Mohamed-Gamal/pfbid026jmVHjYVxcX1M7svbo7rAm2FJKoQRq8T72hwfYWcvfS8z5o977uzZcuAiKNgbGWYl/"}>
                    <i className='bx bxl-facebook-circle footerIcon'></i>
                    </Link>
                    <Link aria-label="go to tiktok page" href={"#"}>
                    <i className='bx bxl-tiktok footerIcon'></i>
                    </Link>
                    <Link aria-label="go to instagram page" target='_blank' href={"https://www.instagram.com/mohamed_gmall_h/?r=nametag"}>
                    <i className='bx bxl-instagram footerIcon'></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Footer