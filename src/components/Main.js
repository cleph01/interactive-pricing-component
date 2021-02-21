import React from 'react'

import '../SASS/main.scss'


function Main() {
    return (
        <div className="pricing-component">
            <div>
                Pageviews
                $ /month
            </div>
            <input className="slider" type="range" />
        </div>
    )
}

export default Main
