import React, { Component } from 'react';

import './css/open-sans.css';
import './css/material-icon.css';
import './css/App.scss';

import logoCyberinfo from './images/cyberinfo.png';
import logoFFN from './images/ffn.jpg';

import DescCyberinfo from './components/DescCyberinfo.js';
import DescFFNStart from './components/DescFFNStart.js';
import DescFFNEnd from './components/DescFFNEnd.js';

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
        about: `平時喜歡看電視、電影、運動（羽球）、聽音樂當娛樂消遣，尤其和朋友去 KTV 唱歌最能排解壓力了!!!\n
            有時也喜歡透過切版與想題材的方式，磨練基礎，並透過前端社團或其他管道來吸取新知識與練習。\n
            偶爾也喜歡透過旅遊紓壓，一邊享受著規劃行程的成就感，一邊體驗冒險的精神。`,
    },
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
            companyIndex: 'cyberinfo',
            company: '網訊科技股份有限公司',
            start: '2017-07',
            end: '2019-10',
            thumb: logoCyberinfo,
            projects: [
                {
                    name: '轉送幫',
                    link: '//www.transbang.com',
                    description: `除了 Web 版的開發與維護外，還有手機版建置。`,
                },
                {
                    name: '集運試手氣,東京來回機票送給你!',
                    link: '//web.taogo.com.tw/events/luckydraw201910',
                    description: `淘購網部分頁面已換成 Node + React，新檔活動頁皆已 compoment 的結構去擴充，並搭配 SCSS + CSS Modules。`,
                },
                {
                    name: '【快問快答Q&A】淘寶、天貓萬元購物金等你拿!',
                    link: '//www.taogo.com.tw/events/relationshipTest',
                    description: `搭配行銷直播活動，設計了倒數計時器與少部分的特效。像是主 Banner 的燈管效果、小元件動畫。`,
                },
                {
                    name: '海淘日本，轉運全世界',
                    link: '//www.transbang.com/event/jpshipping201905',
                    description: `特效部分如花瓣微飄、當視窗捲到特定位置時才出現的泡泡（區塊二）、大 icon（區塊三）、與右側對應的 menu 動畫、還有下半部的螢幕截圖捲軸效果。`,
                },
                {
                    name: '【淘寶/天貓/阿里巴巴】找淘購集運，最高回饋NT$1,000元',
                    link: '//www.taogo.com.tw/events/shippingsale',
                    description: `特效部分如錢幣動畫與 Ticket 的微飄。`,
                },
                {
                    name: '賀新年簽到領紅包，一起領壓歲錢',
                    link: '//www.taogo.com.tw/events/newyearPapa',
                    description: `這是一檔 "登入即可參加抽獎" 的簽到活動，活動期限為期一個月。
                        判斷是否登入與抽獎部分是搭配後端串 API/Ajax 資料，而抽獎部分會根據不同種狀態來呈現對應的畫面與資訊給使用者。`,
                },
            ],
        },
        {
            position: 'Front-End Web Developer',
            companyIndex: 'ffn-end',
            company: 'FriendFinder Networks Inc.',
            start: '2014-06',
            end: '2017-06',
            thumb: logoFFN,
            projects: [
                {
                    name: 'Mobile Site Redesign',
                    link: '//cams.com',
                    description: `與美國工程師合作，以 AngularJS 1.x 作為前端框架，將現有 Cams 手機版介面與架構翻新。`,
                },
                {
                    name: '[EIP] 內部請假系統',
                    link: '',
                    description: `公司計畫做一個內部系統以取代傳統紙上作業。前端框架有 Material Design Lite、與後端串接 Ajax/API 資料，因是多人開發需要 Git 版控。
                        主要是公司開發並非用 Git，這也算是我第一次接觸到 Git。`,
                },
                {
                    name: '[後台] 虛擬禮物管理介面 (Virtual Gift Admin Tool)',
                    link: '',
                    description: `因前台有虛擬禮物功能，需要後台管理虛擬禮物。透過 Ajax/API 串接資料，可管理虛擬禮物的新增、修改和刪除、jQuery 客製化互動式介面。`,
                },
                {
                    name: 'Top 10 SexDating Sites',
                    link: '//top10sexdatingreviews.com',
                    description: `此專案為一個交友平台排名的網站，前端框架用 Foundation + jQuery 製作 RWD 介面，搭配的後端語言則為 PHP，並使用 SVN 進行版控。
                        而這是我轉前端第一個與後端合作的案子，也是透過此案子對 MVC 架構有初步了解。`,
                }
            ],
        },
        {
            position: 'QA Engineer',
            companyIndex: 'ffn-start',
            company: 'FriendFinder Networks Inc.',
            start: '2012-11',
            end: '2014-05',
            thumb: logoFFN,
            description: `主要為人工測試開發中的新功能與線上問題檢測，並撰寫 Test Plan/Test Case 以確保測試品質。
                測試範圍有前台 Mobile 裝置和 Web。`,
            projects: [],
        },
    ],
};

// User.js (( functional company
// import User from './components/User';
// const User = (props) => (

//     <span className="user">
//         {props.name}
//     </span>

// );

const period = (start, end) => (`${start.replace(/-/g, '/')} - ${end.replace(/-/g, '/')}`),
    isOdd = (num) => (num % 2),
    handleParagraph = (str) => (str.replace(/\n/g, '<br>')),
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

const Profile = (props) => (

    <aside className="profile">
        <div className="myInfo">
            <div className="left thumb me">
                <img src={props.image} alt={props.nameEnglish} />
            </div>
            <div className="right">
                <div className="name">{props.nameChinese} <span>({props.nameEnglish})</span></div>
                <div className="contact">
                    <p>
                        <i className="material-icons">phone_enabled</i>
                        <span>{props.cellphone}</span>
                    </p>
                    <p>
                        <i className="material-icons">mail</i>
                        <span>{props.email}</span>
                    </p>
                </div>
            </div>
        </div>

        {/* About me */}
        <div className="about">
            <h2 className="title" data-icon="person_pin">
                <span>關於我</span>
            </h2>
            <p dangerouslySetInnerHTML={{__html: handleParagraph(props.about)}}></p>
        </div>

        {/* Education */}
        <div className="education">
            <h2 className="title" data-icon="school">
                <span>學歷</span>
            </h2>
            <ul className="items">{education(fakeData.education)}</ul>
        </div>

        {/* Skills */}
        {/* <div className="skills">
            <h2 className="title" data-icon="stars">
                <span>專業技能</span>
            </h2>
            <ul className="items">{skill(fakeData.skills)}</ul>
        </div> */}
    </aside>

);

// 技能
const skill = (skills) => skills.map((item, idx) => (

        <li className="skill-wrap" key={idx}>
            <h3>{item.skill}</h3>
            <ul>{skillItems(item.items)}</ul>
        </li>

    )),
    skillItems = (items) => items.map((item, idx) => (

        <li key={idx}>{item}</li>

    ));

// 學歷
const education = (education) => education.map((item, idx) => (

    <li className="item-wrap" key={idx}>
        <div className="thumb">
            <img src={`//btgitdev.bitbucket.io/demo/img/betty/school-${idx + 1}.jpg`} alt="" />
        </div>
        <div className="content">
            <h3>{item.school}</h3>
            <div className="major">{item.major}</div>
            <span className="date">{period(item.start, item.end)}</span>
        </div>
    </li>

));

// 經歷
const experience = (experiences) => experiences.map((item, idx) => (

        <li className={`experience-wrap ${(idx === 0) ? 'active' : ''}`} key={idx}>
            <div className="company-info" data-idx={idx + 1}>
                <div className="gridLeft thumb">
                    <img src={item.thumb} alt={item.company} />
                </div>
                <div className="gridRight">
                    <p className="position">{item.position}</p>
                    <p className="name">{item.company}</p>
                    <span className="date">{period(item.start, item.end)}</span>
                </div>
            </div>
            <div className="company-description">
                {
                    showDescComponent(item.companyIndex, item.projects)
                    // (item.projects.length) ? (

                    //     <DescCyberinfo
                    //         companyIndex={item.companyIndex}
                    //         projects={item.projects}
                    //     />

                    // ) : `11111`
                }
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

                <section className="work-detail">
                     <h2 className="title" data-icon="stars">
                        <span>經歷</span>
                    </h2>

                    <ul className="items experiences">{experience(fakeData.experience)}</ul>

                    {/* <div className="info-wrap skills">
                        <h2>專業技能</h2>

                        <ul className="items">{skill(fakeData.skills)}</ul>
                    </div> */}

                    {/* <div className="info-wrap">
                        <h2 className="title" data-icon="stars">
                            <span>經歷</span>
                        </h2>

                        <ul className="items experiences">{experience(fakeData.experience)}</ul>
                    </div> */}
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
