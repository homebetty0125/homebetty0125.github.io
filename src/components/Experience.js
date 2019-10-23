import React, { Fragment } from 'react';

import common from '../lib/common';

import DescCyberinfo from './DescCyberinfo';
import DescFFNStart from './DescFFNStart';
import DescFFNEnd from './DescFFNEnd';

const Experience = (props) => {

    const experience = (experiences) => experiences.map((item, idx) => (

            <li className={`experience-wrap ${(idx === 0) ? 'active' : ''}`} key={idx}>
                <div className="company-info" data-idx={idx + 1}>
                    <div className="gridLeft thumb">
                        <img src={item.thumb} alt={item.company} />
                    </div>
                    <div className="gridRight">
                        <p className="position">{item.position}</p>
                        <p className="name">{item.company}</p>
                        <span className="date">{common.period(item.start, item.end)}</span>
                    </div>
                </div>
                <div className="company-description">
                    {showDescComponent(item.companyIndex, item.projects)}
                </div>
            </li>

        )),
        showDescComponent = (company, projects) => {

            switch (company) {
                case 'ffn-start':
                    return (
                        <DescFFNStart
                            companyIndex={company}
                        />
                    );

                case 'ffn-end':
                    return (
                        <DescFFNEnd
                            compoanyIndex={company}
                            projects={projects}
                        />
                    );

                default:
                    return (
                        <DescCyberinfo
                            companyIndex={company}
                            projects={projects}
                        />
                    );
            }

        };

    return (

        <Fragment>

            <ul className="items experiences">
                {experience(props.experience)}
            </ul>

        </Fragment>

    );

};

export default Experience;
