import './Contact.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


function Contact() {

    return (
        // <div id='contact'>
        //     <h2 className='contact-header'>Contact Me</h2>
        //     <form className='contact-form'>
        //         <label htmlFor='first-name'></label>
        //         <input id='first-name' name='first-name' type='text' />
        //         <label htmlFor='last-name'></label>
        //         <input id='last-name' name='last-name' type='text' />
        //         <label htmlFor='email'></label>
        //         <input id='email' name='email' type='email' />
        //     </form>
        // </div>
        <Container id='contact'>
            <h2>Contact me</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='email' placeholder='First name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='email' placeholder='Last name' />
                        </Form.Group>                        
                    </Col>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Type message' />
                </Form.Group>
                <Button type='submit'>Submit Form</Button>
            </Form>
        </Container>
        
    )
}

export default Contact;
