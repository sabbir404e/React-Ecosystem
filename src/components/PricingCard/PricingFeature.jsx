import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex ml-3'><CircleCheckBig className='p-1'></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeature;