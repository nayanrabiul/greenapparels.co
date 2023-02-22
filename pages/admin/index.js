import React, {useState} from 'react';
import {Col, Row} from 'antd';
import {del, get, post, put} from "../../utils/api_helpers"
import MainSlide from "./main_slide";
import AboutUs from "./about_us";
import Exprience from "./exprience";
import Products from "./products";
import FactoriesSlide from "./factories_slide";
import CSR from "./csr";
import OurClients from "./our_clients";
import Reviews from "./review";


const LandingPage = () => {
    const [active, setActive] = useState(0);
    const options = [
        {
            level: 'Main Slide',
            data: <MainSlide/>
        }, {
            level: 'About Us ',
            data: <AboutUs/>
        }, {
            level: 'Experience',
            data: <Exprience/>
        }, {
            level: 'Products',
            data: <Products/>
        }, {
            level: 'Factories Slide',
            data: <FactoriesSlide/>
        }, {
            level: 'CSR',
            data: <CSR/>
        }, {
            level: 'Our Clients',
            data: <OurClients/>
        }, {
            level: 'Reviews',
            data: <Reviews/>
        },
    ]

    return (
        <div className>
            <div className={'p-4 text-center text-2xl text-second'}>Green Apparel</div>
            <Row>
                <Col span={4}>
                    {options.map((option, index) => (
                        <div
                            className={`${index === active ? "bg-third" : ""} hover text-second  my-2 p-2 text-center text-lg`}
                            onClick={() => setActive(index)} key={index}>
                            <p>{option.level}</p>
                        </div>
                    ))}
                </Col>
                <Col span={20} className={'p-4 bg-third rounded w-full'}>

                    {options[active].data}

                </Col>
            </Row>
        </div>
    )
};
export default LandingPage;





