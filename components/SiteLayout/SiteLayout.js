import React from 'react';
import dynamic from "next/dynamic";
import Footer from '../Footer';
import styles from './SiteLayout.module.css';

const NavBar = dynamic(() => import('../NavBar'));

const SiteLayout = ({ children }) => (
    <div>
        <NavBar/>
        {children}
        <div>
            <Footer/>
        </div>
    </div>
);

export default SiteLayout;