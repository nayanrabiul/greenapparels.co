import React, {useEffect, useState} from 'react';
import Layout from "../components/common/Layout";
import Slide from "../sections/slide";
import Whychooseus from "../sections/whychooseus";
import Exprience from "../sections/exprience";
import HomeProducts from "../sections/products";
import FactoryDetails from "../sections/factory_details";
import Factorys from "../sections/factory_image_slide";
import Csr from "../sections/csr";
import Swot from "../sections/swot";
import Clients from "../sections/clients";
import Contactus from "../sections/contactus";
import Client_think_about_us from "../sections/client_think_about_us";
import axios from "axios";
import {useFetch} from "../utils/hooks";
import {del, get, post} from "../utils/api_helpers"
import ReactLoading from "react-loading";

const loc = data => get(process.env.NEXT_PUBLIC_URL + '/api/page?page=all');
const getContent = (pages, name) => {
    if (pages?.length > 1) {
        const sd = pages?.filter(page => page.page === name);
        const page = sd[0].content
        return page
    } else return [{}]
}

const Home = () => {

    const [pages, setPages] = useState([])

    async function fetchUserData() {
        try {
            const data = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/page?page=all')
            console.log(data.data.data)
            setPages(data.data.data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchUserData();
    }, []);

    if (pages?.length === 0) {
        return <div className={'h-screen flex justify-center items-center'}><ReactLoading type="bubbles" color='#AA8B56'
                                  height={100} width={50}/></div>
    } else {
        return (
            <Layout>
                <Slide id={'slide'} data={getContent(pages, 'main_slide')}/>
                <Whychooseus id={'Whychooseus'} data={getContent(pages, 'about_us')}/>
                <Exprience id={'Exprience'} data={getContent(pages, 'exprience')}/>
                <HomeProducts data={getContent(pages, 'products')}/>
                <FactoryDetails/>
                <Factorys id={'Factorys'} data={getContent(pages, 'factories_slide')}/>
                <Csr id={'Csr'} data={getContent(pages, 'csr')}/>
                <Swot id={'Swot'}/>
                <Clients id={'Clients'} data={getContent(pages, 'our_clients')}/>
                <Contactus id={'Contactus'}/>
                <Client_think_about_us id={'Client_think_about_us'} data={getContent(pages, 'reviews')}/>
            </Layout>);
    }
}


export default Home;



