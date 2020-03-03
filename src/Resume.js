import React, { PureComponent } from 'react';

import './css/Resume.scss';

import Service from './lib/Service';
import Information from './components/Information.js';
import Experience from './components/Experience.js';
import Footer from './components/Footer.js';

class Resume extends PureComponent {

    state = {
        thumb: '',
        nameChinese: '',
        nameEnglish: '',
        about: '',
        cellphone: '',
        email: '',
        github: '',
        education: [],
        skills: [],
        experience: [],
    };

    componentDidMount () {

        Service.getData('./json/bettyData.json')
            .then((res) => {

                const { profile, education, skills, experience } = res.data,
                    { thumb, nameChinese, nameEnglish, about, cellphone, email, github } = profile;

                this.setState({
                    thumb,
                    nameChinese,
                    nameEnglish,
                    about,
                    cellphone,
                    email,
                    github,
                    education,
                    skills,
                    experience,
                });

            });

    }

    render () {

        return (

            <main>
                {/* 其他資訊 */}
                <Information
                    thumb={this.state.thumb}
                    nameChinese={this.state.nameChinese}
                    nameEnglish={this.state.nameEnglish}
                    about={this.state.about}
                    cellphone={this.state.cellphone}
                    email={this.state.email}
                    github={this.state.github}
                    education={this.state.education}
                    skills={this.state.skills}
                />

                <section>
                    {/* 經歷 */}
                    <div className="work-detail">
                        <h2 className="title" data-icon="stars">
                            <span>經驗值</span>
                        </h2>

                        <Experience
                            experience={this.state.experience}
                        />
                    </div>

                    <Footer/>
                    {/* <footer>Design by Betty @2019</footer> */}
                </section>
            </main>

        );

    }

}

export default Resume;
