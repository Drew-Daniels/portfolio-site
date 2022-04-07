import './Footer.css';

import { RiArrowUpSLine as ScrollUpIcon } from 'react-icons/ri';

function Footer(props) {

    return (
        <footer className='footer'>
            <a href="#home">
                <ScrollUpIcon />
            </a>
        </footer>
    )
}

export default Footer;
