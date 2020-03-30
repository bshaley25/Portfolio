import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Emailer from './Emailer'

export default () => {

    return (

        <Accordion>
            <a href="https://github.com/bshaley25">
            <i className="fab fa-github-alt"></i>
            </a>

            <a href="https://www.linkedin.com/in/bradley-haley-44a85b19a/">
            <i className="fab fa-linkedin"></i>
            </a> 

            <Accordion.Toggle as={Button} eventKey="0" className='toggle-button'>
                <div>
                    <i className="fas fa-paper-plane"></i>
                </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">

                <Emailer></Emailer>

            </Accordion.Collapse>
            
        </Accordion>

    )

}
