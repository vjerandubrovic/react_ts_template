// REACT
import React, { useState } from 'react';
// ANIMATIONS
import { AnimatePresence, motion } from 'framer-motion';
// COMPONENTS
import Navbar from './Navbar/Navbar';
import Navbutton from './Navbar/Navbutton/Navbutton';
// CSS
import classes from './Navigation.module.scss';
// MODELS
import Nav_routes_model from '../../models/Nav_routes_model';

interface Navigation_props {
    routes: Nav_routes_model[];
}

// navigation component that is memorized/do not re_render if not needed
const navigation: React.FC<Navigation_props> = React.memo(props => {

    // get passed properties
    const { routes } = props;

    // useState hook for displaying navigation
    const [displayNav, setDisplayNav] = useState(true);

    // state for hide/show
    const displayNavHandler = () => {
        setDisplayNav(prev => !prev);
    }

    // animation for navbar
    const navigationAnimation = {
        initial: {
            opacity: 0,
            translateY: "-100%",
        },
        in: {
            opacity: 1,
            translateY: "0%",
        },
        out: {
            opacity: 0,
            translateY: "-100%",
        },
    };

    // return JSX
    return (
        <header>
            <Navbutton
                atClick={displayNavHandler}
                show={displayNav}
            />
            <AnimatePresence>
                {
                    displayNav && <motion.nav
                        className={classes.Navigation}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={navigationAnimation}
                    >
                        <Navbar routes={routes} atDisplayNav={displayNavHandler} />
                    </motion.nav>
                }
            </AnimatePresence>
        </header>
    );

});

// export navigation
export default navigation;