import Image from "next/image";
import React, {useState} from "react";

import {Button, Drawer, Radio, Space} from 'antd';
import GarmentsDetails from "../components/garments_details";

const data = [
    {
        CompanyName: "RONG RUI GARMENT BD LTD",
        Tagline: "A WORLD-CLASS GARMENT FACTORY IN BANGLADESH",
        SpaceAllocation: {
            Cutting: "12,500 SQFT",
            Sewing: "40,000 SQFT",
            Finishing: "14,500 SQFT",
            Dining: "5,000 SQFT",
            WareHouse: "2,500 SQFT",
            FinishedWareHouse: "5,000 SQFT",
            Admin: "500 SQFT"
        },
        Factsheet: {
            YearOfEstablishment: "January 2018",
            Manpower: "Male 710 and Female 868",
            FactoryArea: "80,000 Sq.Ft.",
            SewingLines: "12",
            MonthlyCapacity: "1,20,000 Pcs Jacket and 2,00,000 Pcs Pant",
            YearlyExport: "10 Million US$",
        },
        Certification: ["BSCI", "SEDEX", "WRAP"]
    }, {
        CompanyName: "Woolen & Wool Limited", Tagline: "An Export Oriented Sweater Industry", SpaceAllocation: {
            Cutting: "7,000 SQFT",
            Sewing: "20,000 SQFT",
            Finishing: "5,000 SQFT",
            Dining: "2,000 SQFT",
            WareHouse: "2,500 SQFT",
            FinishedWareHouse: "3,000 SQFT",
            Admin: "1,000 SQFT"
        }, Factsheet: {
            YearOfEstablishment: "2003",
            Manpower: "± 300 Persons",
            FactoryArea: "35,000 ft2 (3,252 m2)",
            SewingLines: "10",
            MonthlyCapacity: "± 4,000 Dozs. per month",
            YearlyExport: "20 Million US$",
        }, Certification: ["OEKO-TEX", "BSCI"]
    }, {
        CompanyName: "Milina Fashion Co.", Tagline: "Leading Fashion Manufacturer in Bangladesh", SpaceAllocation: {
            Cutting: "5,000 SQFT",
            Sewing: "15,000 SQFT",
            Finishing: "7,500 SQFT",
            Dining: "2,000 SQFT",
            WareHouse: "2,000 SQFT",
            FinishedWareHouse: "3,000 SQFT",
            Admin: "500 SQFT"
        }, Factsheet: {
            YearOfEstablishment: "2010",
            Manpower: "450 Employees",
            FactoryArea: "40,000 Sq.Ft.",
            SewingLines: "8",
            MonthlyCapacity: "350000 Pcs garments",
            YearlyExport: "",
        }, Certification: []
    }, {
        CompanyName: "GEEBEE GARMENTS", Tagline: "SINCE1892", SpaceAllocation: {
            Cutting: "2000 sq.ft.",
            Sewing: "3000 sq.ft.",
            Finishing: "1000 sq.ft.",
            Dining: "500 sq.ft.",
            WareHouse: "5000 sq.ft.",
            FinishedWareHouse: "3000 sq.ft.",
            Admin: "1000 sq.ft."
        }, Factsheet: {
            YearOfEstablishment: "1950",
            Manpower: "200",
            FactoryArea: "12000 sq.ft.",
            SewingLines: "20",
            MonthlyCapacity: "50,000 pcs",
            YearlyExport: "2 Million USD",
        }, Certification: ["ISO 9001:2015", "OHSAS 18001:2007", "SA 8000:2014"]
    }, {
        CompanyName: "RMM SWEATER DIVISION",
        Tagline: "A conglomerate diversified manufacturing industry in Bangladesh engaged in business of sweater",
        SpaceAllocation: {
            Cutting: "10,000 SQFT",
            Sewing: "20,000 SQFT",
            Finishing: "7,000 SQFT",
            Dining: "2,000 SQFT",
            WareHouse: "6,000 SQFT",
            FinishedWareHouse: "2,000 SQFT",
            Admin: "2,700 SQFT"
        },
        Factsheet: {
            YearOfEstablishment: "2010",
            Manpower: "1000 Members under RMM family (Garments)",
            FactoryArea: "47,700 SQFT",
            SewingLines: "50 Lines",
            MonthlyCapacity: "1,50,000Pcs/Per Month",
            YearlyExport: "us$9.50 million",
        },
        Certification: ["OEKO-TEX", "BSCI", "GOTS", "OCS", "SEDEX", "ACCORD"]
    }]

const FactoryDetails = () => {
    const [toggleState, setToggleState] = useState(0);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };



    return (<div className="w-full  bg-[#001201] py-8 md:py-16 lg:py-32 " id={'Affiliations'}>
        <h1 className="text-center text-first py-2 ">Our Manufactureing Units</h1>
        <div className="container text-white py-8 ">

            {/* company logo and tab  */}

                {data.map((gar, index) => (
                    <div key={index} className={'flex flex-col justify-center items-center space-y-2 '}>
                        <button type=" " onClick={showDrawer}>
                            <h3 className={'shadow-xl border border-third rounded-xl p-3 my-2 text-second'}>{gar.CompanyName} </h3>

                        </button>
                        <Drawer

                            placement={'left'}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            bodyStyle={{ backgroundColor:"#0E2007"}}
                            width={"100%"}
                          >


                            <GarmentsDetails  gar={gar} onClose={onClose}/>,

                        </Drawer>
                    </div>

                ))}



        </div>
    </div>);
};

export default FactoryDetails;
