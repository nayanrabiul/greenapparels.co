import React, {useState} from "react";


const GarmentsDetails = ({gar}) => {
    return (
        <div className={'w-full border border-first p-4 rounded-xl'}>

            <h3 className={'text-center'}>{gar.CompanyName} </h3>
            <h4 className={'text-center text-third'}>{gar.Tagline}</h4>
            <div className={'container grid grid-cols-1 md:grid-cols-3 gap-8 my-8'}>

                <div>
                    <h3 className={"text-center my-2"}>Space Allocation</h3>

                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

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
                    <h3 className={"text-center my-2"}>Factsheet</h3>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

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
                    <h3 className={"text-center my-2"}>Certification</h3>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">

                            <tbody>
                            <div className={'border border-second rounded-xl p-4 flex flex-col justify-center items-center'}>
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
        </div>
    )
}

export default GarmentsDetails;