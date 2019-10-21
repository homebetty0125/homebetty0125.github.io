import React, { Fragment } from 'react';

const projects = (projects) => projects.map((item, idx) => (

    <li key={idx}>
        <a href={item.link}
           title={item.name}
           target="_blank">{item.name}</a>：{item.description}
    </li>

));

const Projects = (props) => (

    <Fragment>

        <ul className={`projects ${props.companyIndex}`}>
            {projects(props.projects)}
        </ul>

    </Fragment>

);

export default Projects;
