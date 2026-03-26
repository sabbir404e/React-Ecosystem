import React from 'react';
import Link from './Link';

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

    return (
        <nav>
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
        <ul className='flex'> 
           
            {
                navLinks.map(link => <Link key={link.id} link={link}></Link>)
            }
       </ul>
        </nav>
    );
};

export default NavBar;