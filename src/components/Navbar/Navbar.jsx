import './Navbar.css';



function Navbar(props) {

    const {sections} = props;

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                {sections.map((section, i) => {
                    return (
                        <li key={i} className='navbar-list-item'>
                            <a href={"#" + section.name + ""}>
                                {section.icon()}
                                <span>{section.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;