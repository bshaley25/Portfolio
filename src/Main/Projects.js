import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AboutMeSillyPhoto from '../img/DSC_5211 copy.JPG'

export default () => {

    return(
        <main>
            <Carousel interval={null} indicators={false}>

                <Carousel.Item>
                    <article>
                        <img src='https://picsum.photos/200' alt='butts'></img>
                        <section>
                            <h3>Asteriods!</h3>
                            <p>
                                This is my take on the classic Asteriods Game! 
                                It was built using vanilla JavaScript in the front and node with express in the back. 
                                Only scoreds that have been apart of the top ten best scores at any time are saved to see how people progress over time. 
                                Play it <a href="https://brads-asteroid-game.web.app/">here</a>!
                            </p>
                        </section>
                    </article>
                </Carousel.Item>

                <Carousel.Item>
                    <article>
                        <img src={AboutMeSillyPhoto} alt='butts'></img>
                        <section>
                            <h3>DONT READ THIS</h3>
                            <p>
                                I need to put stuff in here right now so don't read this. 
                                If you are still reading please pick something else. 
                                If you got this far then you suck at listening to directions.
                                Please mind your own business
                            </p>
                        </section>
                    </article>
                </Carousel.Item>

            </Carousel>
        </main>
    )

}