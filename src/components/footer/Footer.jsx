import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
     <footer className="footer">
            <div className='footer__container container'>
                <h1 className="footer__title">Manish</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://wa.me/919903198887" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://www.instagram.com/manishh__._/" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    
                    <a href="https://twitter.com/Manish__shaw" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy"> &#169; Manish. All rights reserved</span>
            </div>
     </footer>
    )
}

export default Footer