import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Conuntries",
        path: "/"
    },
    {
        id: 3,
        name: "Visited",
        path: "/"
    },
    {
        id:4,
        name: "About",
        path: "/"
    },
    {
        id: 5,
        name: "Contact",
        path: "/"
    }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navLinks.map(link => <Link key={link.id} link={link}></Link>)

    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                <ul className='md: hidden'>
                    {links}
                </ul>
                
            <h3 className='ml-4'>My Navbar</h3>
            </span>
            {/* <ul className='flex'>
                <li  className='mr-10 pl-4'><a href="">Home</a></li>
                <li  className='mr-10'><a href="">About</a></li>
                <li  className='mr-10'><a href="">Contact Us</a></li>
            </ul> */}


            {/* <ul className='flex m-5'> 
               {
               navLinks.map(link => (<li key={link.id}><a className='mr-5' href={link.path}>{link.name}</a></li>))
               }
            </ul> */}
        <ul className='md:flex hidden'> 
           
            {
                links
            }
       </ul>

       <button>Sign In</button>
        </nav>
    );
};

export default NavBar;