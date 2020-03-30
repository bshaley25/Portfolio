import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default () => {

    return(
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
        
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        // <form>
        //     <input type='text' placeholder='your email'></input>
        //     <textarea></textarea>
        //     <button type='submit'></button>
        // </form>
    )
}