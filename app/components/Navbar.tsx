import Menu from './Menu'
import Link from 'next/link'
const Navbar =()=>{
    const user = false
    return(
        <div className='h-12 text-white-500 p-5 flex items-center justify-end md:h-24 Nav'>{/* lg:px-20 md:px-40 */}
            <div className='hidden md:flex Links gap-4 items-center justify-start '>
                <Link className='link text-sm font-medium leading-3 tracking-normal text-left' href="/">Homepage</Link>
                <Link className='link text-sm font-medium leading-3 tracking-normal text-left' href="/Services">Services</Link>
                <Link className='link text-sm font-medium leading-3 tracking-normal text-left' href="/About">About us</Link>
                <Link className='link text-sm font-medium leading-3 tracking-normal text-left' href="/Contact">Contacts</Link>
            </div>
            {/* Mobile Menu */}
            <div className='md:hidden mb-32'>
                <Menu/>
            </div>
            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>{/* <a href="tel:+201100784118"><i class="bx bxs-phone"></i></a> */}
                <Link className='nam text-sm font-medium leading-3 tracking-normal text-left' href="tel:+4922157000807">+49 221 57 000 807</Link>
                |<Link className='callBack text-xs font-medium leading-4 tracking-normal text-left' href="tel:+4922157000807">Call Back</Link>
                <Link className='bookAppointment' href="/Contact">Book an Appointment</Link>
            </div>
        </div>
    )
}
export default Navbar