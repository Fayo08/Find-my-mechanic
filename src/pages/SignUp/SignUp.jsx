import React from 'react';
import BackIcon from '../../assets/icons/back-link.svg'
import Formfields from '../../components/Formfields/Formfields';
import Buttons from '../../components/Buttons/Buttons';

function SignUp(props) {
    return (
        <>
        <div>
            <img src={BackIcon} alt="This is a previous icon" />
        </div>
        <h2>Welcome to Find my Mechanic.</h2>
        <p>Create an account and start enjoying the numerous benefits</p>
        <Formfields />
        <Formfields />
        <Buttons />
        
        </>
    );
}

export default SignUp;