// REACT
import React from 'react';
// REDUX
// COMPONENTS
import Navlink from './Navlink/Navlink';
// CSS
import classes from './Navbar.module.scss';
// MODELS
import Nav_routes_model from '../../../models/Nav_routes_model';

interface Navbar_props {
    routes: Nav_routes_model[];
    atDisplayNav?: () => void
}

// Navbar component that is memorized/do not re_render if not needed
const Navbar: React.FC<Navbar_props> = React.memo(props => {

    // get passed properties
    const { routes, atDisplayNav } = props;

    // navigation for screens with width > 1200px
    let nav = (
        <React.Fragment>
            <ul className={classes.Navbar}>
                {routes.map(route => <Navlink key={route.name} href={route.path} exact>{route.name}</Navlink>)}
                <Navlink href="/account">Account</Navlink>
            </ul>
        </React.Fragment>
    );

    // navigation for screens with width < 1200px
    if (window.screen.width < 1200) {
        nav = (
            <React.Fragment>
                <ul className={classes.Navbar}>
                    {routes.map(route => <Navlink key={route.name} href={route.path} exact={true} atClick={atDisplayNav!}>{route.name}</Navlink>)}
                    <Navlink href="/account" atClick={atDisplayNav!} >Account</Navlink>
                </ul>
            </React.Fragment>
        );
    }

    // return JSX
    return (
        <React.Fragment>
            {nav}
        </React.Fragment>
    );
});

// export Navbar
export default Navbar;