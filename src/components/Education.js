import React, { Fragment } from 'react';

import common from '../lib/common';

const Educations = (props) => {

    const education = (edu) => edu.map((item, idx) => (

        <li className="item-wrap" key={idx}>
            <div className="thumb">
                <img src={`${common.imgPath}/school-${idx + 1}.jpg`} alt="" />
            </div>
            <div className="content">
                <h3>{item.school}</h3>
                <div className="major">{item.major}</div>
                <span className="date">{common.period(item.start, item.end)}</span>
            </div>
        </li>

    ));

    return (

        <Fragment>

            <ul className="items">
                {education(props.education)}
            </ul>

        </Fragment>

    );

};

export default Educations;
