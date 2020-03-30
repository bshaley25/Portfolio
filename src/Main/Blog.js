import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default () => {

    return(
        <Carousel interval={null}>

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
                    <img src='https://picsum.photos/200' alt='butts'></img>
                    <section>
                        <h3>BUTS</h3>
                        <p>Peniasdf</p>
                    </section>
                </article>
            </Carousel.Item>

        </Carousel>
    )

}