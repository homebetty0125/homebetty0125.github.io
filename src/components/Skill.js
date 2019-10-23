import React, { Fragment } from 'react';

const Skill = (props) => {

    const skill = (skills) => skills.map((item, idx) => (

            <li className="skill-wrap" key={idx}>
                <h3>{item.skill}</h3>
                <ul>{skillItems(item.items)}</ul>
            </li>

        )),
        skillItems = (items) => items.map((item, idx) => (

            <li key={idx}>{item}</li>

        ));

    return (

        <Fragment>

            <ul className="items">
                {skill(props.skills)}
            </ul>

        </Fragment>

    );

};

export default Skill;
