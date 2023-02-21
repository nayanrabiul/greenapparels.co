import React, {useState} from "react";
import Image from "next/image";
import Factorys from "../sections/factory_image_slide";


const GarmentsDetails = ({gar, onClose, cross, image}) => {
    return (
        <div className={'w-full border border-first p-4 rounded-xl bg-main'}>

            {cross && <div className=" flex justify-end">
                <Image
                    src={"/nav/close.svg"}
                    alt="menu"
                    className="object-contain"
                    height={28}
                    width={28}
                    onClick={() => onClose(false)}
                />
            </div>}
            {cross ? <h1 className="text-center text-first py-2 ">{gar.CompanyName}</h1> :
                <h2 className="text-center text-second py-2 ">{gar.CompanyName}</h2>}


            <h4 className={'text-center text-third'}>{gar.Tagline}</h4>
            <div className={'container grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-4 md:mb-0'}>

                <div>
                    {cross ? <h3 className={"text-center text-second  my-2"}>Space Allocation</h3> :
                        <h2 className={"text-center text-second  my-2"}>Space Allocation</h2>}


                    <div className="relative overflow-x-auto ">
                        <table
                            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

                            <tbody>
                            <div className={'border border-second rounded-xl p-4'}>
                                {(Object.keys(gar.SpaceAllocation)).map((item, index) => (


                                    <tr className="text-center " key={index}>
                                        <th scope="row"
                                            className="text-third">
                                            {item}
                                        </th>
                                        <td className="text-xl text-bold text-orange-600">
                                            {gar.SpaceAllocation[item]}
                                        </td>

                                    </tr>
                                ))}
                            </div>

                            </tbody>

                        </table>
                    </div>
                </div>
                <div>
                    {cross ? <h3 className={"text-center text-second  my-2"}>Factsheet </h3> :
                        <h2 className={"text-center text-second  my-2"}>Factsheet </h2>}


                    <div className="relative overflow-x-auto">
                        <table
                            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

                            <tbody>
                            <div className={'border border-second rounded-xl p-4'}>
                                {(Object.keys(gar.Factsheet)).map((item, index) => (


                                    <tr className="text-center " key={index}>
                                        <th scope="row"
                                            className="text-third">
                                            {item}
                                        </th>
                                        <td className="text-xl text-bold text-orange-600">
                                            {gar.Factsheet[item]}
                                        </td>

                                    </tr>
                                ))}
                            </div>

                            </tbody>

                        </table>
                    </div>
                </div>
                <div>
                    {cross ? <h3 className={"text-center text-second  my-2"}>Certification </h3> :
                        <h2 className={"text-center text-second  my-2"}>Certification </h2>}

                    <div className="relative overflow-x-auto">
                        <table
                            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

                            <tbody>
                            <div
                                className={'border border-second rounded-xl p-4 flex flex-col justify-center items-center'}>
                                {(Object.keys(gar.Certification)).map((item, index) => (


                                    <tr className="text-center " key={index}>

                                        <td className="text-xl text-bold text-orange-600">
                                            {gar.Certification[item]}
                                        </td>

                                    </tr>
                                ))}
                            </div>

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
            {image && <Factorys/>}

        </div>
    )
}
export default GarmentsDetails;