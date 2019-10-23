import React, { Fragment } from 'react';

const Profile = (props) => (

    <Fragment>

        <div className="profile">
            <div className="left thumb me">
                <img src={props.image} alt={props.nameEnglish} />
            </div>
            <div className="right">
                <div className="name">{props.nameChinese} <span>({props.nameEnglish})</span></div>
                <div className="contact">
                    <p>
                        <i className="material-icons">phone_enabled</i>
                        <span>{props.cellphone}</span>
                    </p>
                    <p>
                        <i className="material-icons">mail</i>
                        <span>{props.email}</span>
                    </p>
                </div>
            </div>
        </div>

    </Fragment>

);

export default Profile;
