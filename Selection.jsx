import React from 'react';
import './Selection.css';
import Nav from '../Navbar/Nav';
import Doctorsel from "./doctorsel.png"
import { useNavigate } from "react-router-dom"
import Doctoricon from "./doctor icon.jpg"
import Stafficon from "./staff icon.jpg"
import Patienticon from "./patient icon.jpg"

const Selection = () => {
    const navigate = useNavigate();

    const gotoDoc = () => {
        navigate("/doctor");
    };

    const gotoPat = () => {
        navigate("/patient");
    };

    const gotoSta = () => {
        navigate("/staff");
    };

    return (
        <>
            <div>
                <div className="container">
                    <div className="firstpage">
                        <div>
                            <Nav />
                            <div className="navbelow">
                                <div className="left-section">
                                    <p className='lsp'>Select Your Respective Field</p>
                                    <div className="card-carousel">
                                        <div className="innerbox" id='1'>
                                            <span className="logo">
                                                <img src={Doctoricon} alt="Image not Loaded" />
                                            </span>
                                            <span className="cbrief">Doctor</span>
                                            <span className="linebr"></span>
                                            <div className="content">Click Here If you Are a Doctor</div>
                                            <button className="button" onClick={() => gotoDoc()}>Click here</button>
                                        </div>

                                        <div className="innerbox" id='1'>
                                            <span className="logo">
                                                <img src={Patienticon} alt="Image not found" />
                                            </span>
                                            <span className="cbrief">Patient</span>
                                            <span className="linebr"></span>
                                            <div className="content">Click Here If you Are a Patient</div>
                                            <button className="button" onClick={() => gotoPat()}>Click here</button>
                                        </div>

                                        <div className="innerbox" id='1'>
                                            <span className="logo">
                                                <img src={Stafficon} alt="Image not Loaded" />
                                            </span>
                                            <span className="cbrief">Staff</span>
                                            <span className="linebr"></span>
                                            <div className="content">Click Here If you Are a Staff Member</div>
                                            <button className="button" onClick={() => gotoSta()}>Click here</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-section">
                                    <img src={Doctorsel} alt="Image not Loaded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Selection;
