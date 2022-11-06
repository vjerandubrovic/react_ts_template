// REACT
import React from 'react';
// REDUX
// COMPONENTS
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
// import CookieModal from '../CookieModal/CookieModal';
// SCSS
import classes from './Layout.module.scss';
// MODELS
import Nav_routes_model from '../../models/Nav_routes_model';

interface Layout_props {
    routes: Nav_routes_model[];
    children: any;
}

// layout component
const layout: React.FC<Layout_props> = props => {

    // get passed properties
    const { children, routes } = props;

    // return JSX
    return (
        <React.Fragment>
            {/* <CookieModal /> */}
            <Navigation routes={routes} />
            <main className={classes.Layout}>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    );
};

// export layout
export default layout;