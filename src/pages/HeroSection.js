import React from 'react';
import { InputComponent } from '../components/InputComponent';

export const HeroSection = () => {
    return (
        <header className="hero-section" >
            <div className="hero-section__info">
                <img 
                    className="hero-section_logo"
                    src="https://res.cloudinary.com/dmfhnhyyj/image/upload/v1626406787/Base%20Apparel/logo_qfeywn.svg" 
                    alt="logo"
                />
                <div className="hero-section__title-wrapper" >
                    <h1 className="hero-section__title-light" >
                        We're
                        <span className="hero-section__title" >Coming</span>
                        <span className="hero-section__title" >Soon</span>
                    </h1>
                </div>
                <p className="hero-section__text" >
                    Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <InputComponent />
            </div>
            <img
                className="hero-section__image"
                src="https://res.cloudinary.com/dmfhnhyyj/image/upload/v1626309319/Base%20Apparel/hero-desktop_popwjc.jpg"
                alt="Woman" />
        </header>
    )
}
