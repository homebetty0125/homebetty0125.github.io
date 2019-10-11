import React, { Component } from 'react';
// import logo from './logo.svg';
import './open-sans.css';
import './material-icon.css';
import './App.scss';
// import './App.css';

// 3: xxx.json
// 4: axios.get('./xxx.json').then((res) => { console.log(res) });
const fakeData = {
    profile: {
        thumb: '//btgitdev.bitbucket.io/demo/img/betty/me.jpg',
        nameChinese: '梁湧昇',
        nameEnglish: 'Betty Liang',
        gender: '女',
        about: '我是一位前端工程師',
        email: 'bliang.tw@gmail.com',
        cellphone: '0918217896',
        birthday: '1990-01-25',
    },
    interest: '平時喜歡看電視、看電影、運動(像是打羽球)、聽音樂當娛樂消遣，尤其和朋友去 KTV 唱歌最能排解壓力了!!! 有時也喜歡透過切版與想題材的方式，磨練基礎，並透過前端社團或其他管道來吸取新知識與練習；更喜歡規劃旅遊，將吸收到的資訊藉以寫部落格(文章)的方式，來達到幫助人的效果，一方面也是訓練自己的表達能力。',
    skills: [
        {
            skill: 'HTML / CSS',
            items: [
                'HTML5',
                'CSS3',
                'Bootstrap',
                'SASS / SCSS',
                'RWD',
            ],
        },
        {
            skill: 'Javascript',
            items: [
                'ES6',
                'AJAX & API 串接',
                'React',
                'jQuery',
            ],
        },
        {
            skill: '開發工具',
            items: [
                'Git',
                'NPM',
                'Webpack',
                'VSCode',
                'ESLint - Airbnb',
            ],
        },
    ],
    education: [
        {
            school: '國立臺中科技大學',
            major: '資訊管理系 [二技]',
            start: '2010-09',
            end: '2012-06',
        },
        {
            school: '國立臺北商業技術學院',
            major: '企業管理科 [二專]',
            start: '2008-09',
            end: '2010-06',
        },
    ],
    experience: [
        {
            position: 'Front-End Web Developer',
            company: '網訊科技Cyberinfo',
            start: '2017-07',
            end: '2019-10',
            thumb: '',
            description: '11111',
            projects: [
                {
                    name: '轉送幫',
                    link: '',
                    skills: [
                        'AJAX / API 串接後端資料'
                    ],
                },
                {
                    name: '上海樂淘',
                    link: '',
                    skills: [
                        'AJAX / API 串接後端資料'
                    ],
                },
                {
                    name: '淘購',
                    link: '',
                    skills: [
                        'AJAX / API 串接後端資料'
                    ],
                },
                {
                    name: '代購幫',
                    link: '',
                    skills: [
                        'AJAX / API 串接後端資料'
                    ],
                },
            ]
        },
        {
            position: 'Front-End Web Developer',
            company: 'FriendFinder Networks Inc.',
            start: '2014-06',
            end: '2017-06',
            thumb: '',
            description: '11111',
            projects: [
                {
                    name: 'Mobile Site Redesign',
                    link: '',
                    skills: [
                        'Angular 1.x 作為前端框架，將現有的 Cams 手機版畫面翻新',
                        'AJAX / API 串接後端資料'
                    ],
                },
                {
                    name: '[EIP] 內部請假系統',
                    link: '',
                    skills: [
                        'Material Design Lite 套版 UI/UX',
                        'AJAX / API 串接後端資料',
                        'Git 版控'
                    ],
                },
                {
                    name: '[後台] 虛擬禮物管理介面 (Virtual Gift Admin Tool)',
                    link: '',
                    skills: [
                        'AJAX / API 串接資料，可管理虛擬禮物的新增、修改和刪除',
                        'jQuery 客製互動式介面',
                        'CSS 製作版面',
                    ],
                },
                {
                    name: 'Top 10 SexDating Sites',
                    link: '//top10sexdatingreviews.com',
                    skills: [
                        'Foundation 套版 UI/UX 部分，並製作 RWD 畫面',
                        'jQuery 做少部分的互動式效果',
                        '搭配後端為 PHP，略懂 MVC 架構',
                    ],
                }
            ]
        },
        {
            position: 'QA Engineer',
            company: 'FriendFinder Networks Inc.',
            start: '2012-11',
            end: '2014-05',
            thumb: '',
            description: '11111',
            projects: [],
        },
    ],
};

// User.js (( functional comp
// import User from './components/User';
const User = (props) => (

    <span className="user">
        {props.name}
    </span>

);

const Profile = (props) => (

    <aside className="profile">
        <div className="wrap">
            <div className="thumb">
                <img src={props.image} alt={props.nameEnglish} />
            </div>

            {/* About me */}
            <div className="about">
                <h2 className="title">關於我</h2>
                <p>{props.about}</p>
            </div>

            {/* Contact me */}
            <div className="contact">
                <h2 className="title">聯絡我</h2>
                <p>
                    <i className="material-icons">phone</i>
                    <span>{props.cellphone}</span>
                </p>
                <p>
                    <i className="material-icons">mail</i>
                    <span>{props.email}</span>
                </p>
            </div>
        </div>
    </aside>

);

const skill = (skills) => skills.map((item, idx) => (

    <li className="skill-wrap" key={idx}>
        <h3>{item.skill}</h3>
        <ul>{skillItems(item.items)}</ul>
    </li>

));

const skillItems = (items) => items.map((item, idx) => (

    <li key={idx}>{item}</li>

));

const period = (start, end) => (`${start.replace(/-/g, '/')} - ${end.replace(/-/g, '/')}`),
    isOdd = (num) => (num % 2);

const education = (education) => education.map((item, idx) => (

        <li className="item-wrap" key={idx}>
            <div className="thumb">
                <img src={`//btgitdev.bitbucket.io/demo/img/betty/school-${idx + 1}.jpg`} alt="" />
            </div>
            <div className="content">
                <h3 className="title">{item.school}</h3>
                <p>{item.major}</p>
                <span className="date">{period(item.start, item.end)}</span>
            </div>
        </li>

    )),
    experience = (experiences) => experiences.map((item, idx) => (

        <li className={`bubble ${isOdd(idx + 1) ? 'left' : 'right'}`} key={idx}>
            {/* <h3>{isOdd(idx + 1)}</h3> */}
            <div className="experience-wrap">
                <div className="date">{period(item.start, item.end)}</div>
                <div className="company" idx={`check-${idx + 1}`}>
                    <img src="//btgitdev.bitbucket.io/demo/img/ffn.jpg" alt="" />
                </div>
                <h3>
                    <span>{item.position}</span>
                    <span> - {item.company}</span>
                </h3>
                <p className="description">{item.description}</p>
            </div>
        </li>

    ));

class App extends Component {

    constructor (props) {

        super(props);

        this.state = {
            name: ''
        };

        this.showAlert = this.showAlert.bind(this);

    }

    showAlert () {

        this.setState({
            name: 'betty'
        });

    }

    render () {

        return (
            <main>
                <Profile
                    image={fakeData.profile.thumb}
                    nameChinese={fakeData.profile.nameChinese}
                    nameEnglish={fakeData.profile.nameEnglish}
                    about={fakeData.profile.about}
                    cellphone={fakeData.profile.cellphone}
                    email={fakeData.profile.email}
                />

                <section>
                    <div className="info-wrap">
                        <div className="grid">
                            <h2>學歷</h2>

                            <ul className="items">{education(fakeData.education)}</ul>
                        </div>

                        <div className="grid skills">
                            <h2>專業技能</h2>

                            <ul className="items">{skill(fakeData.skills)}</ul>
                        </div>
                    </div>

                    <div className="info-wrap">
                        <h2>經歷</h2>

                        <ul className="items experiences">{experience(fakeData.experience)}</ul>
                    </div>
                </section>
            </main>

            // <h1>
            //     Name:
            //     <User
            //         name={this.state.name}
            //         age={this.state.age}
            //     />
            //     <button onClick={this.showAlert}>click</button>
            // </h1>
        );

    }

}

export default App;
