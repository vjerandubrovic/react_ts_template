// REACT
import React from 'react';
// REDUX
// COMPONENTS
import Navlink from '../Navigation/Navbar/Navlink/Navlink'

// SCSS
import classes from './Footer.module.scss';



// REACT-MEMO
const Footer: React.FC = () => {

    return (
        <footer className={classes.Footer}>
            <div>
                <h1 className={classes.Footer_Title}>CalcEat&#169;{new Date().getFullYear()}.</h1>
                Photo by <a href="https://www.pexels.com/photo/assorted-vegetable-lot-1300972/" target="_blank" rel="noreferrer">Magda Ehlers</a> from Pexels
            </div>
            <ul className={classes.Footer_Links}>
                <Navlink href="/associates" >Suradnici</Navlink>
                <Navlink href="/terms" >Terms of use</Navlink>
                <Navlink href="/cookies" >Cookies usage</Navlink>
                <Navlink href="/privacy" >Privacy policy</Navlink>
            </ul>
        </footer>
    );
};

export default Footer;