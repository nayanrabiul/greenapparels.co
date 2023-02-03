import Head from "next/head";
import Image from "next/image";
import Affiliations from "../sections/affiliations";
import Clients from "../sections/clients";
import Client_think_about_us from "../sections/client_think_about_us";
import Layout from "../components/common/Layout";
import Contactus from "../sections/contactus";
import Csr from "../sections/csr";
import Factorys from "../sections/factory_image_slide";
import Products from "../sections/products";
import Slide from "../sections/slide";
import Whychooseus from "../sections/whychooseus";
import Exprience from "../sections/exprience";
import Swot from "../sections/swot";
import FactoryDetails from "../sections/factory_details";


function Home({false_data}) {

    return (
        <Layout>
            <Slide id={'slide'}/>
            <Whychooseus id={'Whychooseus'}/>
            <Exprience id={'Exprience'}/>
            <Products id={'Products'}/>
            {/*<Affiliations id={'Affiliations'}/>*/}
            <FactoryDetails/>
            <Factorys id={'Factorys'}/>
            <Csr id={'Csr'}/>
            <Swot id={'Swot'}/>
            <Clients id={'Clients'}/>
            <Contactus id={'Contactus'}/>
            <Client_think_about_us id={'Client_think_about_us'}/>


            {/*"Quality Assurance": "RONG RUI GARMENT BD LTD is committed to providing the highest quality products.*/}
            {/*All garments pass through strict quality control checkpoints at every stage of production with corporate*/}
            {/*quality auditors overseeing production and reporting to the Director and MD of the company.",*/}
        </Layout>
    );
}

export async function getStaticProps() {

    const false_data = {}
    return {
        props: {
            false_data
        },
    }
}

export default Home;



