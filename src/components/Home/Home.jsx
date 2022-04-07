import './Home.css';

function Home(props) {

    const {title, headshot} = props;

    return (
        <div id='home'>
            <h1 className='home-header'>drew daniels | {title}</h1>
            <div className='headshot-container'>
                <img src={headshot} alt="Drew Daniels' Headshot" className='headshot'/>
            </div>
        </div>
    )
}

export default Home;
