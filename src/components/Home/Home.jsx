import './Home.css';
import { Container } from 'react-bootstrap';

function Home(props) {

    const {title} = props;

    return (
        <Container id='home'>
            <h1 className='home-header'>{'<'}</h1>
            <h1 className='home-header'>drew daniels | {title}</h1>
            <h1 className='home-header'>{'>'}</h1>
        </Container>
    )
}

export default Home;
