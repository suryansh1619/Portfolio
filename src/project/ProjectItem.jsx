import React, { useContext } from 'react'
import useToggle from '../hooks/usetoggle';
import { ThemeContext } from '../contexts/ThemeContext';
export default function ProjectItem(props) {
    const  {project}=props;
    const {darktheme}=useContext(ThemeContext);
    const [isHovering, toggleHover] = useToggle(false);
    return (
        <div 
            className="project-card" 
            key={project.id}
            style={{
                border: darktheme ?  "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.2)",
                backgroundColor: darktheme ? 'rgba(255,255,255,0.05)' :"rgba(0,0,0,0.05)"
            }}
            >
            <img src={project.imgUrl} alt="" className="project-img" />
            <div className="project-hover" onClick={toggleHover}>
                <h3 
                    className="project-title"
                    style={{color:darktheme ? 'var(--container-color)' : 'var(--title-color)'}}
                >{project.title}</h3>
            </div>
            <h3 className="project-tmp-title">{project.title}</h3>
            {isHovering && 
                <div 
                    className="project-modal"
                    style={{
                        backgroundColor: darktheme ? 'rgba(255,255,255,0.6)' :"rgba(0,0,0,0.6)"
                    }}>
                    <div 
                        className="project-modal-content"
                        style={{
                            border: darktheme ?  "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.2)",
                            backgroundColor: darktheme ? 'var(--title-color)' :"var(--container-color)"
                        }}
                        >
                        <i className='uil uil-times-circle modal-close' onClick={toggleHover}></i>
                        <h3 className="modal-title">{project.title}</h3>
                        <ul className="modal-list grid">
                            <li className="modal-item">
                                <span className="item-icon">
                                    <i className="uil uil-brackets-curly"></i>
                                </span>
                                <div>
                                    <span 
                                        className="item-title"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}>{project.title1}</span>
                                    <span 
                                        className="item-details"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}
                                        >{project.discription1}</span>
                                </div>
                            </li>
                            <li className="modal-item">
                                <span className="item-icon">
                                    <i className="uil uil-brackets-curly"></i>
                                </span>
                                <div>
                                    <span 
                                        className="item-title"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}>{project.title1}</span>
                                    <span 
                                        className="item-details"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}
                                        >{project.discription1}</span>
                                </div>
                            </li>
                            <li className="modal-item">
                                <span className="item-icon">
                                    <i className="uil uil-brackets-curly"></i>
                                </span>
                                <div>
                                    <span 
                                        className="item-title"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}>{project.title1}</span>
                                    <span 
                                        className="item-details"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}
                                        >{project.discription1}</span>
                                </div>
                            </li>
                            <li className="modal-item">
                                <span className="item-icon">
                                    <i className="uil uil-brackets-curly"></i>
                                </span>
                                <div>
                                    <span 
                                        className="item-title"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}>{project.title1}</span>
                                    <span 
                                        className="item-details"
                                        style={{
                                            color: darktheme ? 'var(--contanier-color)' :"var(--title-color)"
                                        }}
                                        >{project.discription1}</span>
                                </div>
                            </li>
                        </ul>
                        <img src={project.imgUrl} alt="" className="modal-img" />
                        <a 
                            href={project.link} 
                            className="project-button"
                            style={{
                                color: darktheme ? 'var(--container-color)' :"var(--title-color)"
                            }}>
                            Demo 
                            <i
                                className="bx bx-right-arrow-alt project-button-icon"
                                style={{
                                    color: darktheme ? 'var(--container-color)' :"var(--title-color)"
                                }}></i>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}
