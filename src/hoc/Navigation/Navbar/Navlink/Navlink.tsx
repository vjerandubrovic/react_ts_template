// REACT
import React from 'react';
// ROUTER
import { NavLink } from 'react-router-dom';
// CSS
import classes from './Navlink.module.scss';

interface Navlink_props {
    href: string;
    exact?: boolean;
    atClick?: () => void;
    children: any;
}

const Navlink: React.FC<Navlink_props> = React.memo(props => {

    const { children, atClick } = props;

    return (
        <li onClick={() => atClick && atClick()}>
            <NavLink
                to={props.href}
                end={props.exact}
                className={({ isActive }) => "" + (isActive ? classes.Active : "")}
            >
                {props.children}
            </NavLink>
        </li>
    );

});

export default Navlink;