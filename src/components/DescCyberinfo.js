import React, { PureComponent, Fragment } from 'react';
import Projects from './Projects';

import holloweenBat from '../images/holloween-bat.png';

class DescCyberinfo extends PureComponent {

    constructor (props) {

        super(props);

        this.TSB = this.props.projects[0];

    }

    render () {

        return (

            <Fragment>

                <div>
                    開發團隊導入敏捷式開發（Agile）的 Scrum 模式來執行專案流程，並透過 Git 版控有效管理每個 Sprint 要上線的專案。
                    <br/>
                    <br/>
                    主要負責專案為轉送幫的開發與維護，使用技術與框架有：
                    <br/>
                        - 前端部分 → Bootstrap、SCSS、Javascript ES6 和 Webpack。<br/>
                        - 後端部分 → PHP 與 CI（CodeIgniter）。
                    <br/>
                    <br/>
                    同時也參與協同開發，像是：<br/>
                        - 手機版建置 （於年初上線）。<br/>
                        - 重構主流程 → 與其他開發者討論接口（API）設計、程式架構與畫面翻新。
                    <br/>
                    <br/>
                    而次要負責的專案有支援其他平台開發與各平台活動頁切版（Web + RWD）：
                </div>

                {/* 蝙蝠特效 */}
                <div className="img">
                    <img src={holloweenBat} alt="bat"/>
                    <a href={this.TSB.link} target="_blank">點我看{this.TSB.name}</a>
                </div>

                {/* 過往專案 */}
                <Projects
                    companyIndex={this.props.companyIndex}
                    projects={this.props.projects}
                />

            </Fragment>

        );

    }
}

// const DescCyberinfo = (props) => (

//     <Fragment>

//         <p>
//             開發團隊導入敏捷式開發 (Agile) 的 Scrum 模式來執行專案流程，並透過 Git 版控有效管理每個 Sprint 要上線的專案。
//             <br/>
//             <br/>
//             主要負責專案為轉送幫的開發與維護，使用技術與框架有：
//             <br/>
//                 - 前端部分 → Bootstrap、SCSS、Javascript ES6 和 Webpack。<br/>
//                 - 後端部分 → PHP 與 CI (CodeIgniter)。
//             <br/>
//             <br/>
//             同時也參與協同開發，像是：<br/>
//                 - 手機版建置 (於年初上線)。<br/>
//                 - 重構主流程 → 與其他開發者討論接口 (API) 設計、程式架構與畫面翻新。
//             <br/>
//             <br/>
//             <ul className="projects">
//                 <li data-icon="whatshot">
//                     {/* <a href={props.projects[0].link}>：{props.projects[0].name}</a> */}
//                 </li>
//             </ul>
//             <br/>
//             <br/>
//             而次要負責的專案有支援其他平台開發與各平台活動頁切版 (Web + RWD)：
//         </p>

//         {
//             (props.projects.length) ? (

//                 <Projects
//                     projects={props.projects}
//                 />

//             ) : (

//                 <span>no project</span>

//             )
//         }

//     </Fragment>

// );

export default DescCyberinfo;
