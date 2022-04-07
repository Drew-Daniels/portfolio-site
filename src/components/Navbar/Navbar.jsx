import './Navbar.css';

function Navbar(props) {

    const {sections} = props;

    return (
        <nav>
            <ul>
                {sections.map((section, i) => {
                    return (
                        <li key={i}>
                            <a href={"#" + section + ""}>{section}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;