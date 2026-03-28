import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, duration, features} = pricing;
    return (
        <div className='flex flex-col border bg-orange-500 rounded-2xl p-4'>
            {/* Card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{`${price}${'/'}${duration}`}</h4>
            </div>
            {/* Card body */}
            <div className='mt-5 flex-1'>
                 {
                    features.map((feature, index) => <PricingFeature key={feature.index} feature={feature}></PricingFeature>)
                 }
            </div>
            <button className="btn btn-wide mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;