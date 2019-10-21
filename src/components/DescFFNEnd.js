import React, { Fragment } from 'react';
import Projects from './Projects';

const DescFFNEnd = (props) => (

    <Fragment>

        <div>
            公司願意給我一個內轉前端的機會，便開始了前端生涯。由於曾經是 QA 的一員，較了解測試人員的辛苦，在開發時會更加細心地檢測自己的程式是否有問題。
        </div>

        {/* 過往專案 */}
        <Projects
            companyIndex={props.companyIndex}
            projects={props.projects}
        />

    </Fragment>

);

export default DescFFNEnd;
