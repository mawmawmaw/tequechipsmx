import React from 'react';

import './TwoHalves.css';

const TwoHalves = ({containerCssClass = '', leftSideBg = '', leftContent, rightSideBg = '', rightContent}) => {
    return (
        <div className={`ui two column stackable grid two-halves ${containerCssClass}`}>
            <div className="ui column no-padding left-column" style={{backgroundImage: `url(${leftSideBg})`}}>
                {leftContent}
            </div>
            <div className="ui column no-padding right-column" style={{backgroundImage: `url(${rightSideBg})`}}>
                {rightContent}
            </div>
        </div>
    )
}

export default TwoHalves;