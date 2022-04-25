import portrait from '../images/picOfMe.jpeg';
import '../styles/card.css';
 
const Card = () => {

    const handleClick = () => {
        window.open("https://ovi3d0.github.io/portfolio/");
    };

    return (
        <>
            <div className='card-container'>
                <div className="card">
                    <img src={portrait} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div>
                            <h2>Michael Oviedo</h2>
                            <h5>Front End Developer</h5>
                            <button onClick={handleClick}>My site</button>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;