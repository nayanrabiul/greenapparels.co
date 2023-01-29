import Head from "next/head";
import Image from "next/image";
import Affiliations from "../components/affiliations";
import Clients from "../components/clients";
import Client_think_about_us from "../components/client_think_about_us";
import Layout from "../components/common/Layout";
import Contactus from "../components/contactus";
import Csr from "../components/csr";
import Factorys from "../components/factory";
import Products from "../components/products";
import Slide from "../components/slide";
import Whychooseus from "../components/whychooseus";
import Exprience from "../components/exprience";
import Swot from "../components/swot";


function Home() {

    return (
        <Layout>

                <Slide id={'slide'}/>
                <Whychooseus id={'Whychooseus'}/>
                <Exprience id={'Exprience'}/>
                <Products id={'Products'}/>
                <Affiliations id={'Affiliations'}/>
                <Swot id={'Swot'}/>
                <Clients id={'Clients'}/>
                <Factorys id={'Factorys'}/>
                <Client_think_about_us id={'Client_think_about_us'}/>
                <Contactus id={'Contactus'}/>
                <Csr id={'Csr'}/>

        </Layout>
    );
}

export default Home;
