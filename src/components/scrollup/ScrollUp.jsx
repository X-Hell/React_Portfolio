import React, {useState} from 'react';
import "./scrollup.css";

const ScrollUp = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (

    <button href="#" className="scrollup" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} >
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
);
}

export default ScrollUp;
