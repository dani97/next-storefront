import React, {useState} from 'react';
import Header from "../Header";
import Footer from '../Footer';
import style from './SiteLayout.module.css';
import BackDrop from "../Backdrop";
import Drawer from "../Drawer";
import DrawerContext from '../Drawer/DrawerContext';

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
            <DrawerContext.Provider value={{drawerOpen, setDrawerOpen}}>
                <Header drawerOpenHandler={toggleDrawerOpen}/>
                <div className={style.content}>
                    <Drawer open={drawerOpen} title="Menu"/>
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
            </DrawerContext.Provider>
        </div>
    )
};

export default SiteLayout;