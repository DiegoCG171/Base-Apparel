import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { ArrowIcon } from './ArrowIcon';
import { ErrorIcon } from './ErrorIcon';


export const InputComponent = () => {

    const [error, setError] = useState(false);

    const [formValues, handeleInputChange, reset] = useForm({
        email: ''
    });

    const { email } = formValues;

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
            setError(true);
            console.log('is a invalid email')
        } else {
            console.log('is a valid email')
            setError(false);
            reset();
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className='contact__form'
        >
            <div className='contact__input-wrapper' >
                <input
                    className={`contact__input ${ error ? 'contact__input--error' : '' }`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handeleInputChange}
                    placeholder="Email Address"
                />
                <ErrorIcon error={error} />
                <button
                    className='contact__button'
                    type="submit"
                >
                    <ArrowIcon />
                </button>
            </div>
            <label className={ `contact__input-label ${error ? 'active-error' : ''}`} >
                Please provide a valid email
            </label>
        </form>
    )
}
