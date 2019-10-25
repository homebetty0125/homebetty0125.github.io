import React, { Fragment } from 'react';
import common from '../lib/common';
import Projects from './Projects';
import holloweenBat from '../images/holloween-bat.png';

const DescCyberinfo = (props) => {

    const TSB = props.projects[0];

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
                    - 手機版建置（於年初上線）。<br/>
                    - 重構主流程 → 與其他開發者討論接口（API）設計、程式架構與畫面翻新。
                <br/>

                {/* 開啟轉送幫網站 > 蝙蝠特效 */}
                <div className="open-tsb bat">
                    <img src={`${common.imgPath}/holloween-bat.png`} className="web" alt="bat" />
                    {/* <img src={holloweenBat} className="web" alt="bat"/> */}
                    <a href={TSB.link}
                       title={TSB.name}
                       target="_blank"
                       rel="noopener noreferrer">點我看{TSB.name}</a>
                </div>

                <br/>
                而次要負責的專案有支援其他平台開發與各平台活動頁切版（Web + RWD）：
            </div>

            {/* 過往專案 */}
            <Projects
                companyIndex={props.companyIndex}
                projects={props.projects}
            />

        </Fragment>

    );

};

export default DescCyberinfo;
