import portrait from '../images/picOfMe.jpeg';
import '../styles/card.css';

const Card = () => {

    return (
        <>
            <div className='card-container'>
                <div className="card">
                    <img src={portrait} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <div>
                            <h2>Michael Oviedo</h2>
                            <h6 className='job-title'>Front End Developer</h6>
                            <a href='https://ovi3d0.github.io/portfolio/' target={'blank_'}
                                className="text-decoration-none pb-2 d-block site-link">
                                My Website
                            </a>
                            <div className='row'>
                                <div className='col-6'>
                                    <a href='mailto: michael.j.oviedo@gmail.com'>
                                        <button className='btn btn-light mx-2 mt-3 mb-5'><i class="fa-solid fa-envelope pe-1"></i>Email</button>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a href='https://www.linkedin.com/in/michael-oviedo-00669a198/' target={'_blank'} rel="noreferrer">
                                        <button className='btn btn-primary mx-2 mt-3 mb-5'><i class="fa-brands fa-linkedin"></i>Linkedin</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-start'>
                            <h5 className="card-title">About</h5>
                            <p className="card-text">I am a frontend developer with a particular interest in
                                making things simple and automating daily tasks. I try to keep up with security
                                and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div className='text-start py-4'>
                            <h5 className="card-title">Interests</h5>
                            <p className="card-text">Food expert. Music scholar. Reader. Internet fanatic.
                             Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                        </div>
                    </div>
                    <div className='card-footer rounded-bottom'>
                        <div className='d-flex justify-content-around'>
                            <a href='https://twitter.com/devMike_' target={'_blank'} rel="noreferrer">
                                <i class="fa-brands fa-twitter-square fa-footer fa-3x"></i>
                            </a>
                            <a href='https://github.com/OVI3D0' target={'_blank'} rel="noreferrer">
                                <i class="fa-brands fa-github-square fa-footer fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;