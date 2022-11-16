import React from "react";
import '../styles/noticeboard.css';
import Notice from "../components/reusable/Notice";
import ButtonNotice from "../components/popup-form-notice/ButtonNotice";
import {ServicesButton} from '../styles/lost';
function NoticeEmployee() {
    return (
        <div className="main">
            <div className="parent-content">

                <h2 className="main-head">NOTICES</h2>
                <div className="main-content">
                    <Notice />
                    <ServicesButton>
                        <ButtonNotice />
                    </ServicesButton>
                </div>
            </div>
        </div>
    );
};

export default NoticeEmployee;