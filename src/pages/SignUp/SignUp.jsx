import React from 'react';
import BackIcon from '../../assets/icons/back-link.svg'
import Formfields from '../../components/Formfields/Formfields';
import Buttons from '../../components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import './SignUp.scss'

function SignUp(props) {
    return (
        <main className='sign-up__page'>
        < section className='sign-up'>
        <Link to="/" aria-label="Back to home">
            <img src={BackIcon} alt="" />
        </Link>
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
        </main>
    );
}

export default SignUp;