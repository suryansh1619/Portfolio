import React, { useContext, useState,useEffect } from 'react'
import "./adminHeader.css";
import useToggle from '../../hooks/usetoggle'
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
export default function AdminHeader() {
    const[toggle,showMenu]=useToggle(false);
    const location=useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
    }, []);
    const {darktheme}=useContext(ThemeContext);
    return (
        <header className='admin-header'
        style={{backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)"
        }}>
            <nav 
                className='admin-nav container'
                >
                <Link to='/' 
                className='admin-nav-logo'>Suryansh</Link>
                <div 
                    className={toggle?'admin-nav-menu admin-show-menu':'admin-nav-menu'}
                    style={{backgroundColor: isMobile ? (darktheme ?'var(--title-color)' : 'var(--container-color)')
                        : (darktheme ? 'var(--title-color)' : 'var(--container-color)'),
                    }}>
                    <ul className='admin-nav-list grid'>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/home' 
                                className={`${location.pathname==='/admin/home' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-estate admin-nav-icon'></i>
                                Home
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/about' 
                                className={`${location.pathname==='/admin/about' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-user admin-nav-icon'></i>
                                About
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/skills' 
                                className={`${location.pathname==='/admin/skills' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-lightbulb-alt admin-nav-icon'></i>
                                Skills
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/qualification' 
                                className={`${location.pathname==='/admin/qualification' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-book-open admin-nav-icon'></i>
                                Qualification
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/projects' 
                                className={`${location.pathname==='/admin/projects' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-scenery admin-nav-icon'></i>
                                Projects
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/footer' 
                                className={`${location.pathname==='/admin/footer' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-layers admin-nav-icon'></i>
                                Footer
                            </Link>
                        </li>
                        <li className='admin-nav-item'>
                            <Link 
                                to='/admin/theme' 
                                className={`${location.pathname==='/admin/theme' ? 'admin-active-link' : ''} admin-nav-link`}
                                style={{
                                    color: darktheme ? "var(--container-color)" : "var(--title-color)"
                                }}>
                                <i className='uil uil-brush-alt admin-nav-icon'></i>
                                Theme
                            </Link>
                        </li>
                    </ul>
                    <i 
                        className='uil uil-times admin-nav-close' 
                        onClick={showMenu}
                        style={{
                            color: darktheme ? "var(--container-color)" : "var(--title-color)"
                        }}></i>
                </div>
                <div className='admin-nav-toggle' onClick={showMenu}>
                <i className='uil uil-apps '></i>
                </div>
            </nav>
        </header>
    )
}
