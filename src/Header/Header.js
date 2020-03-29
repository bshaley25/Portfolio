import React from 'react'

export default ({ changeState }) => {

    return(

        <header>
            <h1 onClick={changeState}>Bradley Haley</h1>
            <nav className="head-nav">
                <h2 onClick={changeState}>About Me</h2>
                <h2 onClick={changeState}>Projects</h2>
                <h2 onClick={changeState}>Blog</h2>
            </nav>
        </header>

    )

}