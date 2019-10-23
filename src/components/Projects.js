import React, { Fragment } from 'react';

const Projects = (props) => {

    const project = (projects) => projects.map((item, idx) => (

        <li key={idx}>
            <a href={item.link}
            title={item.name}
            target="_blank">{item.name}</a>：{item.description}
        </li>

    ));

    return (

        <Fragment>

            <ul className={`projects ${props.companyIndex}`}>
                {project(props.projects)}
            </ul>

        </Fragment>

    )
};

export default Projects;
