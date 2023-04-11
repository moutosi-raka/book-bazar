import React from 'react';

const PrimaryButtom = ({children}) => {
    return (
        <>
            <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white">{children}</button>
        </>
    );
};

export default PrimaryButtom;