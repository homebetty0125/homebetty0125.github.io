import React, { Fragment } from 'react';

import common from '../lib/common';

import Profile from './Profile';
import Education from './Education';
import Skill from './Skill';


const information = (props) => {

    let isActive = true;

    const body = document.body,
        handleClick = (e) => {

            // console.log('isActive111:', isActive);

            const { target } = e,
                sliderWrap = document.querySelector('.information');

            if (isActive) handleSlideDown(sliderWrap);
            else handleSlideUp(sliderWrap);

            handleToggleArrow(target);

        },
        handleSlideDown = (e) => {

            e.classList.add('active');
            body.classList.add('lockScreen');
            isActive = false;

        },
        handleSlideUp = (e) => {

            e.classList.remove('active');
            body.classList.remove('lockScreen');
            isActive = true;

        },
        handleToggleArrow = (e) => {

            let dataset = e.dataset,
                curr = e.textContent,
                toggle = dataset.toggle;

            e.textContent = toggle;
            e.dataset.toggle = curr;

        };

    return (

        <Fragment>

            <aside className="information">

                {/* 手機版 Slide Icon */}
                <i className="material-icons mobile show-more"
                    data-toggle="keyboard_arrow_up"
                    onClick={handleClick}>keyboard_arrow_down</i>

                {/* 個人資料 */}
                <Profile
                    image={props.image}
                    nameChinese={props.nameChinese}
                    nameEnglish={props.nameEnglish}
                    about={props.about}
                    cellphone={props.cellphone}
                    email={props.email}
                />

                {/* 給手機版下拉 Wrap */}
                <div className="other-info">

                    {/* 關於我 */}
                    <div className="about">
                        <h2 className="title" data-icon="person_pin">
                            <span>關於我</span>
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: common.handleParagraph(props.about) }}></p>
                    </div>

                    {/* 學歷 */}
                    <div className="education">
                        <h2 className="title" data-icon="school">
                            <span>教育程度</span>
                        </h2>

                        <Education
                            education={props.education}
                        />
                    </div>

                    {/* 技能 */}
                    {/* <div className="skill">
                        <h2 className="title" data-icon="thumb_up">
                            <span>技能</span>
                        </h2>

                        <Skill
                            skills={props.skills}
                        />
                    </div> */}

                </div>

            </aside>

        </Fragment>

    );
};

export default information;
