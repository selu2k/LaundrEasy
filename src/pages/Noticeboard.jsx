import React from "react";
import '../styles/noticeboard.css';
import Notice from "../components/reusable/Notice";


function Noticeboard() {
    return (
        <div className="main">
            <div className="parent-content">

                <h2 className="main-head">NOTICES</h2>
                <div className="main-content">

                    <Notice />
                </div>
            </div>
        </div>
    );
};

export default Noticeboard;