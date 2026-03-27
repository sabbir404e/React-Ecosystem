import React from 'react';

const Link = ({link}) => {
    return (
        <li className='lg:mr-5 px-4 hover:bg-amber-400'>
            <a href={link.path}>{link.name}</a>
        </li>
    );
};

export default Link;