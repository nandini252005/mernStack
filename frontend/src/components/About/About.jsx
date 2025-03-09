
import aboutImg from '../../assets/images/about1.png';
import aboutCardImg from '../../assets/images/about-card1.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <div className='container'>
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                    {/* ====== About Image ======= */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="About Us" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                            <img src={aboutCardImg} alt="Healthcare Service" />
                        </div>
                    </div>

                    {/* ====== About Content ======= */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className='heading'>We take pride in being one of the best healthcare providers</h2>
                        <p className='text__para'>
                            Our remote healthcare service provides high-quality medical assistance at your convenience. We ensure that you receive expert medical consultation without the need for physical visits.
                        </p>
                        <p className='text__para mt-[30px]'>
                            From virtual doctor consultations to AI-driven health monitoring, our platform is designed to make healthcare more accessible and efficient. Your well-being is our top priority.
                        </p>
                        <Link to='/'>
                            <button className='btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
