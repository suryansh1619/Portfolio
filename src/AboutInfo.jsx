import React from 'react'
import About from './about/About';
import Skills from './skills/Skills';
import Qualification from './qualification/Qualification';
import Footer from './footer/Footer'

export default function AboutInfo(props) {
    const {about,aboutInfo,qualificationEducation,qualificationExperience,skills,footers}=props
    return (
        <>
            <About 
                about={about}  
                aboutInfo={aboutInfo}/>
            <Skills 
                skills={skills}  />
            <Qualification
                qualificationEducation={qualificationEducation}
                qualificationExperience={qualificationExperience}/>
            <Footer
                footers={footers}/>
        </>
    )
}
