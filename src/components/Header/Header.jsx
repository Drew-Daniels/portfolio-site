import Navbar from '../Navbar/Navbar';

function Header(props) {

    const {sections} = props;

    return (
        <header>
            <Navbar sections={sections}/>
        </header>
    )
}


export default Header;
