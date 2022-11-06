// REACT
import React, { useEffect } from 'react';
// REDUX
import { connect, ConnectedProps } from 'react-redux'
// import * as action from '../../store/actions/index';
// COMPONENTS
// SCSS
import classes from './Home.module.scss';
// MODELS



const Home: React.FC = () => {

    return (
        <div className={classes.Home} onClick={() => console.log("HELLO!")}>
            Hello from Home
        </div>
    );
};

export default Home;