import React, {useState} from 'react';
import dynamic from "next/dynamic";
import Header from "../Header";
import Footer from '../Footer';
import style from './SiteLayout.module.css';
import BackDrop from "../Backdrop";
const Drawer = dynamic(() => import('../Drawer'), { ssr: false });

const SiteLayout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    let backDrop;
    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    }

    const closeOnBackdrop = () => {
        setDrawerOpen(false);
    }

    if (drawerOpen) {
        backDrop = <BackDrop click={closeOnBackdrop}/>;
    }

    return (
        <div>
            <Header drawerOpenHandler={toggleDrawerOpen}/>
            <div className={style.content}>
                <Drawer open={drawerOpen}/>
                {
                    backDrop
                }
                <section>
                    {
                        children
                    }
                </section>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default SiteLayout;