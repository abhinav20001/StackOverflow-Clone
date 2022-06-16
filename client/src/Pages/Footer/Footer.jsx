import React, { Fragment } from "react";

import { ReactComponent as GitHub } from "../../assets/GitHub.svg";
import { ReactComponent as Database } from "../../assets/Database.svg";

import './Footer.css';

const Footer = () => {
    return <Fragment>
        <div className='footer'>
            <div className="socials">
                <div className="social-item">
                    <a
                        href='https://github.com/abhinav20001/StackOverflow-Clone/tree/main/client'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <GitHub />
                    </a>
                    <p><strong>Frontend </strong></p>
                </div>
                <div className="social-item">
                    <a
                        href='https://github.com/abhinav20001/StackOverflow-Clone/tree/main/server'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <Database />
                    </a>
                    <p><strong> Backend</strong></p>
                </div>
            </div>
        </div>
    </Fragment>
};

export default Footer;
