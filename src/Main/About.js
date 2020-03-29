import React, { useState } from 'react'
import AboutMePhoto from '../img/DSC_5210 copy.JPG'
import AboutMeSillyPhoto from '../img/DSC_5211 copy.JPG'


export default () => {


    const [bool, setBool] = useState(true);


    const handleClick = () => {
        setBool(!bool)
    }

    return(
        <main className="about">
            <p>
                Up and coming software developer hoping to make an impact on <strong>education</strong>, open data and design. 
                An avid learner that can quickly grasp new languages, frameworks, 
                and concepts and <strong>thrives</strong> when challenged to be <strong>creative</strong> and use complex problem solving skills. 
                <strong> Motivated</strong> to build applications that <strong>improve</strong> everyday life for others.
            </p>
            {bool?  <img src={AboutMePhoto} onClick={handleClick}></img> : <img src={AboutMeSillyPhoto} onClick={handleClick}></img>}
        </main>

    )

}