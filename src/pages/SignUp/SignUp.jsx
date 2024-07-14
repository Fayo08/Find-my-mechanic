import React from 'react';
import BackIcon from '../../assets/icons/back-link.svg'
import Formfields from '../../components/Formfields/Formfields';
import Buttons from '../../components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import './SignUp.scss'

function SignUp(props) {
    return (
        < section className='sign-up'>
        <div>
            <img src={BackIcon} alt="This is a previous icon" />
        </div>
        <div className='sign-up__content'>
        <div className='sign-up__title'>
        <h2>Welcome to Find my Mechanic.</h2>
        <p>Create an account and start enjoying the numerous benefits</p>
        </div>
        <div className='sign-up__fields'>
        <div className='sign-up__input'>
        <Formfields placeholder="Email" />
        <Formfields placeholder="Password" />
       
        </div>
        <Link to="/" >
        <Buttons buttonText="Sign in" colorClass={"pri-button"} />
        </Link>
        </div>
        </div>
        </section>
    );
}

export default SignUp;