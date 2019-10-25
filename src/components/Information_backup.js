import React, { Fragment, PureComponent } from 'react';

import common from '../lib/common';

import Profile from './Profile';
import Education from './Education';

class XXX extends PureComponent {

    state = {
        active: false
    };

    handleActiveChange = () => {

        this.setState({
            active: !this.state.active
        });

    }

    render () {

        return (
            <div
                className={
                    this.state.active
                        ? 'terry'
                        : 'betty'
                }
                onClick={this.handleActiveChange}
            >
                {
                    this.state.active
                        ? 'show'
                        : 'hide'
                }
            </div>
        );

    }

}

const Information = (props) => {

    let isActive = true;

    const body = document.body,
        handleClick = (e) => {

            const { currentTarget } = e,
                sliderWrap = document.querySelector('.information');

            if (isActive) handleSlideDown(sliderWrap);
            else handleSlideUp(sliderWrap);

            handleToggleArrow(currentTarget);

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
                icon = e.querySelector('i'),
                curr = icon.textContent,
                toggle = dataset.toggle;

            icon.textContent = toggle;
            e.dataset.toggle = curr;

        };

    return (

        <Fragment>

            <aside className="information">

                <XXX/>

                {/* 手機版 Slide Icon */}
                <button className="mobile show-more"
                    onClick={handleClick}
                    data-toggle="keyboard_arrow_up">
                    <i className="material-icons">keyboard_arrow_down</i>
                </button>

                {/* 個人資料 */}
                <Profile
                    image={props.image}
                    nameChinese={props.nameChinese}
                    nameEnglish={props.nameEnglish}
                    about={props.about}
                    cellphone={props.cellphone}
                    email={props.email}
                    github={props.github}
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
                </div>

            </aside>

        </Fragment>

    );
};

export default Information;
