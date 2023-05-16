import React from "react";
import Navb from "../components/Navb";
import Footer from "./Footer";
import ScrollTop from "../components/ScrollTop";

const Registration = () => {
    return(
        <>
            <Navb show={false} />
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                    <div
                        style={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                        textAlign: "justify",
                        }}
                    >
                        <p>
                            At least one of the authors of every accepted paper must register for the conference 
                            (as Full Authors Registration) with registration fee as per the applicable category and 
                            present the paper in order for it to be included in the conference proceedings. If more 
                            than one author of an accepted paper wish to attend the conference, all such authors need 
                            to register separately by paying applicable registration fee.
                        </p>
                </div>
            </div>
            
            {/* <hr style={{backgroundColor:"white", height:"5px"}}/> */}
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default Registration;