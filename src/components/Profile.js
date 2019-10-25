import React, { Fragment } from 'react';
import common from '../lib/common';

const Profile = (props) => (

    <Fragment>

        <div className="profile">
            <div className="left thumb me">
                <img src={`${common.imgPath}/me.jpg`} alt={props.nameEnglish} />
            </div>
            <div className="right">
                <div className="name">{props.nameChinese} <span>({props.nameEnglish})</span></div>
                <div className="contact">
                    <p>
                        <span>
                            <i className="material-icons">phone_enabled</i>
                        </span>
                        <span>{props.cellphone}</span>
                    </p>
                    <p>
                        <span>
                            <i className="material-icons">mail</i>
                        </span>
                        <span>{props.email}</span>
                    </p>
                    <a href={props.github}
                       title="GitHub"
                       target="_blank"
                       rel="noopener noreferrer">
                        <span>
                            <i className="material-icons">link</i>
                        </span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>

    </Fragment>

);

export default Profile;
