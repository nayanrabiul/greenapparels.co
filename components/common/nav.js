import Image from "next/image";
import Link from "next/link";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Slide from "../slide";
import Whychooseus from "../whychooseus";
import Exprience from "../exprience";
import Products from "../products";
import Affiliations from "../affiliations";
import Swot from "../swot";
import Clients from "../clients";
import Factorys from "../factory";
import Client_think_about_us from "../client_think_about_us";
import Contactus from "../contactus";
import Csr from "../csr";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [nav_color_change, setnav_color_change] = useState(false);

    const onScroll = (event) => {
        const {scrollY} = window;

        scrollY > 120 ? setnav_color_change(true) : setnav_color_change(false);
        console.log(scrollY, nav_color_change)
    };

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, {passive: true});
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, {passive: true});
        };
    }, []);

    const data = [
        {title: "Affiliations", hash_link: "#Affiliations"},
        {title: "Products", hash_link: "#Products"},
        {title: "Exprience", hash_link: "#Exprience"},
        {title: "About Us", hash_link: "#Whychooseus"},
        {title: "Partnership", hash_link: "#Contactus"},


    ];

    return (
        <div
            className={`fixed z-50 w-full ${
                nav_color_change ? "bg-[#000000] opacity-90" : "opacity-100"
            } text-second `}
        >

            <nav className="container p-2 flex justify-between items-center">
                {/* for desktop */}
                <div className="container p-2 flex justify-between items-center">
                    <h3>Greeen Apparels</h3>

                    <div className="hidden md:block">
                        <ul className="flex flex-row justify-center items-end space-x-3">
                            {data.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.hash_link}>{item.title}</Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* this is for  toggle  hamburger icon and close*/}
                <div className="md:hidden flex justify-end items-center py-3">
                    <Image
                        src={toggle ? "/nav/close.svg" : "/nav/menu.svg"}
                        alt="menu"
                        className="w-7 h-7"
                        height={28}
                        width={28}
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* this is mobile secton */}
                    <div
                        className={` ${
                            !toggle ? "hidden" : "block"
                        }  fixed top-0  w-full h-screen bg-[#000000]  `}
                    >
                        <div className="flex flex-col justify-center items-center p-4 py-16">
                            <div className="hover:border rounded-full border-white">
                                <Image
                                    src={"/nav/close.svg"}
                                    alt="menu"
                                    className="object-contain"
                                    height={28}
                                    width={28}
                                    onClick={() => setToggle(!toggle)}
                                />
                            </div>
                            <ul className=" flex flex-col justify-center items-end space-x-3 text-3xl text-white mt-8 space-y-8">
                                {data.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.hash_link} onClick={() => setToggle(false)}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
