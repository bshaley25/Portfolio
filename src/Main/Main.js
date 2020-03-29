import React from 'react'

import DefaultPage from './DefaultPage'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'

export default ( props ) => {

    const { page } = props

    return(
        <>
            { page === "Bradley Haley" ? <DefaultPage></DefaultPage> : null}
            { page === "About Me" ? <About></About> : null}
            { page === "Projects" ? <Projects></Projects> : null}
            { page === "Blog" ? <Blog></Blog> : null}
        </>
    )

}