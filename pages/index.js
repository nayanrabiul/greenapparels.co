import React from 'react';
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


function Home({datas}) {
    const data = (name) => {
        const sd = datas.filter(data => data.page === name);
        return sd[0].content;
    }

    return (
        <Layout>
            <Slide id={'slide'} data={data('main_slide')}/>
            <Whychooseus id={'Whychooseus'} data={data('about_us')}/>
            <Exprience id={'Exprience'} data={data('exprience')}/>
            <HomeProducts data={data('products')}/>
            <FactoryDetails />
            <Factorys id={'Factorys'} data={data('factories_slide')}/>
            <Csr id={'Csr'} data={data('csr')}/>
            <Swot id={'Swot'}/>
            <Clients id={'Clients'} data={data('our_clients')}/>
            <Contactus id={'Contactus'}/>
            <Client_think_about_us id={'Client_think_about_us'} data={data('reviews')}/>
        </Layout>
    );
}

export async function getServerSideProps(){
    const res = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/page?page=all');

    return {
        props: {
            datas: res.data.data
        }
    }
}


export default Home;



