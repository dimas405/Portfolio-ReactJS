import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { changeTabActive } from '../redux/action';

const NavBar = ({ activeTab }) => {
    const [listnav] = useState(['Home', 'Skills', 'Project', 'Contact']);
    const [menuOpen, setMenuOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTabActive('Home'));
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            setMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
    };

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
        changeTab(sectionId.slice(1));
        setMenuOpen(false); // Close the menu after clicking a link
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="nav-logo">
                <a href="#">Dimas A <span className="color-acsent">Pradana</span></a>
            </div>
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                {
                    listnav.map((value, key) => (
                        <a
                            key={key}
                            href={`#${value.toLowerCase()}`}
                            className={activeTab === value ? 'active' : ''}
                            onClick={(e) => handleClick(e, `#${value.toLowerCase()}`)}
                        >
                            {value}
                        </a>
                    ))
                }
            </nav>
            <div className={`icon-bar ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
