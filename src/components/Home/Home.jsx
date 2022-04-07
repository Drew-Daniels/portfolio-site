import './Home.css';

function Home(props) {

    const {title} = props;

    return (
        <div id='home'>
            <h1 className='home-header'>drew daniels | {title}</h1>

        </div>
    )
}

export default Home;
