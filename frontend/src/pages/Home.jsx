import React, { useState } from "react"; //6.9k (gzipped: 2.7k)
import { useNavigate } from 'react-router-dom';

import heroImg011 from "../assets/images/hero-img011.png";
import heroImg022 from "../assets/images/hero-img022.png";
import heroImg033 from "../assets/images/hero-img033.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/hero-img033.png";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About.jsx';
import ServiceList from '../components/Services/ServiceList';
import featureImg from "../assets/images/doctor-img011.png";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/faq/FaqList.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";

const Home = () => {
    const [roomId, setRoomID] = useState()
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`/room/${roomId}`)
    }
    return (<>

        {/* ======= hero section ======= */}
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                    <div>
                        <div className="lg:w-[570px]">
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]">We help patients live healthy and long lives.</h1>
                            <p className="text__para">No more waiting in line, you control your time.</p>
                            <button className="btn">Book an Appointment</button>
                            <input type="text" placeholder="Enter RoomID" value={roomId} onChange={e => setRoomID(e.target.value)} />
                            <button className="btn" onClick={handleJoin} style={{ backgroundColor: '#4fa9b0' }}>
                                Join
                            </button>
                        </div>

                        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                            <div>
                                <h2 className="text-[36px] lg:text-[44px] font-[700] text-headingColor">30+</h2>
                                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-[36px] lg:text-[44px] font-[700] text-headingColor">15+</h2>
                                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Medical Centers</p>
                            </div>
                            <div>
                                <h2 className="text-[36px] lg:text-[44px] font-[700] text-headingColor">100%</h2>
                                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Patient Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[30px] justify-end">
                        <div>
                            <img className="w-full rounded-xl" src={heroImg011} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <img src={heroImg022} alt="" className="mb-[30px] w-2/3 rounded-xl" />
                            <img src={heroImg033} alt="" className="w-2/3 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <About />

        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Medical Services</h2>
                    <p className="text__para text-center">World-class healthcare for everyone.</p>
                </div>
                <ServiceList />
            </div>
        </section>

        <section>
            <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="xl:w-[670px]">
                        <h2 className="heading">Get virtual treatment anytime.</h2>
                        <ul className="pl-4">
                            <li className="text__para">1. Book an appointment instantly.</li>
                            <li className="text__para">2. Find a healthcare provider and contact their office.</li>
                            <li className="text__para">3. Meet doctors accepting new patients and plan your visit online.</li>
                        </ul>
                        <Link to='/'><button className="btn">Learn More</button></Link>
                    </div>
                    <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                        <img src={featureImg} className="w-3/4" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Experienced Doctors</h2>
                    <p className="text__para text-center">World-class healthcare and expert medical assistance.</p>
                </div>
                <DoctorList />
            </div>
        </section>

        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-0">
                    <div className="w-1/2 hidden md:block">
                        <img src={faqImg} alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="heading">Frequently Asked Questions</h2>
                        <FaqList />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">What Our Patients Say</h2>
                </div>
                <Testimonial />
            </div>
        </section>
    </>
    );
};

export default Home;
