import Image from "next/image";
import Link from "next/link";
import React, {useCallback, useContext, useEffect, useState} from "react";

import Exprience from "../../sections/exprience";
import Products from "../../sections/products";
import Affiliations from "../../sections/affiliations";

import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


const variants_mobile_nav_ul = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};const variants_mobile_nav_li = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


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
            className={`fixed z-50 w-full bg-[#000000] ${
                nav_color_change ? "bg-opacity-80" : "bg-opacity-20"
            } text-second `}
        >

            <nav  className="container p-0 flex justify-between items-center">
                {/* for desktop */}
                <div className="w-full py-1 flex justify-between items-center" >
                    <Link href={'/#Whychooseus'}>
                    <Image
                        src={'/nav/logo.png'}
                        alt="logo"
                        className="w-16 h-12 md:w-28 md:h-20 object-contain"
                        width={512}
                        height={512}
                    />
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex flex-row justify-end items-center space-x-3">
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

                    <motion.nav
                        animate={toggle ? "open" : "closed"}  variants={variants}
                        className={` ${
                            !toggle ? "hidden" : "fixed"
                        }   top-0 right-0 left-0  h-screen bg-[#000000]  `}
                    >
                        <div className="flex flex-col justify-center items-center p-4 py-16">
                            <div className="border rounded-full border-white p-4">
                                <Image
                                    src={"/nav/close.svg"}
                                    alt="menu"
                                    className="object-contain"
                                    height={28}
                                    width={28}
                                    onClick={() => setToggle(!toggle)}
                                />
                            </div>
                            <motion.ul variants={variants_mobile_nav_ul} className=" flex flex-col justify-center items-center space-x-3 text-3xl text-second mt-8 space-y-8">
                                {data.map((item, index) => (

                                    <motion.li
                                        variants={variants_mobile_nav_li}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={index}
                                    >
                                        <Link  href={item.hash_link} onClick={() => setToggle(false)}> {item.title}</Link>
                                    </motion.li>



                                ))}
                            </motion.ul>

                        </div>
                    </motion.nav>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
