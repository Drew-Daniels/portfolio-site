import './Contact.css';

function Contact() {

    return (
        <div id='contact'>
            <h2 className='contact-header'>Contact Me</h2>
            <form className='contact-form'>
                <label htmlFor='first-name'></label>
                <input id='first-name' name='first-name' type='text' />
                <label htmlFor='last-name'></label>
                <input id='last-name' name='last-name' type='text' />
                <label htmlFor='email'></label>
                <input id='email' name='email' type='email' />
            </form>
        </div>
    )
}

export default Contact;
