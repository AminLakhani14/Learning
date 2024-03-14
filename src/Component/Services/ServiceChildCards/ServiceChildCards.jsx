import React from 'react';
import './ServiceChildCards.css';
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className={'svcard'}>
            <div className="svcard-content">
                <div style={{ textAlign: 'left' }} className='Arrow' ><img src={icon} height={'30px'} width={'30px'} alt='' /></div>
                <div>
                    <h3>{title}</h3>
                </div>
                <p className='svcardspara'>{description}</p>
            </div>
        </div>
    );
};

export const ServiceCardList = ({ ServiceCardList }) => {
    return (
        <div className="svcard-list">
            {ServiceCardList.map((data, index) => (
                <ServiceCard
                    key={index}
                    icon={data?.icon}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </div>
    );
};