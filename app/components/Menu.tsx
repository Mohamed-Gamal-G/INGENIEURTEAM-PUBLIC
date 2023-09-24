"use client";

import Image from 'next/image'
import Link from 'next/link'
import react, { useState } from 'react';
const Links =[
    { id:1, title: "Homepage", url:"/"},
    { id:2, title: "Services", url:"/Services"},
    { id:3, title: "Locations and Contacts", url:"/Contact"},
    { id:4, title: "About us", url:"/About"},
];
const Menu =()=>{
    const [open, setOpen] = useState(false);
    return(
        <div>
            {!open ?( <Image src="/menu.png" alt='' width={30} height={30} onClick={()=>setOpen(true)}/>
            ) : (
            <Image src="/x_icon_150997.png" alt='' width={30} height={30} onClick={()=>setOpen(false)}/>
            )}
            
            {open &&(<div className='menu absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {Links.map(item=>(
                    
                    <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
                ))}
            </div>)}
        </div>
    )
}
export default Menu