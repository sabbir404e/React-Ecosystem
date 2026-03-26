import React from 'react';

const Link = ({link}) => {
    return (
        <li className='mr-5'>
            <a href={link.path}>{link.name}</a>
        </li>
    );
};

export default Link;