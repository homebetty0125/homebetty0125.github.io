import React, { Fragment, PureComponent } from 'react';

import common from '../lib/common';

import Profile from './Profile';
import Education from './Education';

class Information extends PureComponent {

    state = {
        active: false,
    };

    handleClick = () => {

        this.setState({
            active: !this.state.active,
        });

    }

    render () {

        return (

            <Fragment>

                <aside className={`information ${this.state.active ? 'active' : ''}`}>

                    {/* 手機版 Slide Icon */}
                    <button className="mobile show-more"
                        onClick={this.handleClick}>
                        <i className="material-icons">
                            {this.state.active ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        </i>
                    </button>

                    {/* 個人資料 */}
                    <Profile
                        thumb={this.props.thumb}
                        nameChinese={this.props.nameChinese}
                        nameEnglish={this.props.nameEnglish}
                        cellphone={this.props.cellphone}
                        email={this.props.email}
                        github={this.props.github}
                    />

                    {/* 給手機版下拉 Wrap */}
                    <div className="other-info">

                        {/* 關於我 */}
                        <div className="about">
                            <h2 className="title" data-icon="person_pin">
                                <span>關於我</span>
                            </h2>
                            <p dangerouslySetInnerHTML={{ __html: common.handleParagraph(this.props.about) }}></p>
                        </div>

                        {/* 學歷 */}
                        <div className="education">
                            <h2 className="title" data-icon="school">
                                <span>教育程度</span>
                            </h2>

                            <Education
                                education={this.props.education}
                            />
                        </div>
                    </div>

                </aside>

            </Fragment>

        );

    }

}

export default Information;
