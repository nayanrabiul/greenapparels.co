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
      <div className="space-y-32">
        <Slide />
        <Whychooseus />
        <Exprience/>
        <Products />
        <Affiliations />
        <Swot/>
        <Clients />
        <Factorys />
        <Client_think_about_us />
        <Contactus />
        <Csr />
      </div>
    </Layout>
  );
}

export default Home;
