import React, { Fragment } from 'react';

const Projects = (props) => {

    const project = (projects) => projects.map((item, idx) => (

        <li key={idx}>
            {
                (item.link) ? (

                    <Fragment>
                        <a href={item.link}
                            title={item.name}
                            target="_blank"
                            rel="noopener noreferrer">{item.name}</a>{`：${item.description}`}
                    </Fragment>

                ) : (

                    <Fragment>
                        <span>{item.name}</span>{`：${item.description}`}
                    </Fragment>

                )
            }
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
