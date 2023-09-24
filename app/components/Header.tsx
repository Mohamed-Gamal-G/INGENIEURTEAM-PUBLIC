import Image from "next/image"
import Link from 'next/link'
const Header =()=>{
    return(
         <main className="heder h-20 flex items-center justify-between">
            <div className="left_side flex">
                <Image src={"/Group 2.png"} width={200} height={24} alt=""/>
                <p className="TÜV text-xs font-normal leading-3 tracking-normal text-left">TÜV SÜD AUTO PARTNER <br/>
                 IN NEUSS</p>
            </div>
            <div className="right_side flex ">
                <Link className="Heinrich text-xs font-normal leading-3 tracking-normal text-left ml-6 flex items-center justify-center" target="_blank" href={"https://www.google.com/maps/search/Ingenieurteam/@52.4997929,13.4867749,11z?entry=ttu"}>
                    <Image className="mb-1 mr-2" src={"/Map Point.png"} width={20} height={20} alt=""/> Heinrich-Pesch-Str.
                <br />
                5a 50739 Köln 
                </Link>
                <span className="lain">|</span>
                <Link className="text-xs font-normal leading-3 tracking-normal text-left ml-6" href={"/"}>
                <br />
                Mon-Fri, 9:00-19:00 
                </Link>
                <span className="lain">|</span>
                <div className="iconContiner">
                    <Link aria-label="go to facebook page" target='_blank' href={"https://www.facebook.com/people/Mohamed-Gamal/pfbid026jmVHjYVxcX1M7svbo7rAm2FJKoQRq8T72hwfYWcvfS8z5o977uzZcuAiKNgbGWYl/"}>
                    <i className='bx bxl-facebook-circle Icon'></i>
                    </Link>
                    <Link aria-label="go to tiktok page" href={""}>
                    <i className='bx bxl-tiktok Icon'></i>
                    </Link>
                    <Link aria-label="go to instagram page" target='_blank' href={"https://www.instagram.com/mohamed_gmall_h/?r=nametag"}>
                    <i className='bx bxl-instagram Icon'></i>
                    </Link>
                    
                </div>
            </div>
        </main>
    )
}
export default Header