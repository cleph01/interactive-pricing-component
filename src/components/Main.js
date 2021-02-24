import React, {useState} from 'react'

import Billing from './Billing'

import Footer from './Footer'

import '../SASS/main.scss'


function Main() {

    const [pageView, setPageVier] = useState({
        "10" : 8, 
        "50" : 12,
        "100" : 16,
        "500" : 24,
        "1M" : 36
    })

    return (
        <div className="pricing-component">
            <div className="pricing-header">
                <div className="pricing-header-text">10K PAGEVIEWS</div>
                <div className="pricing-header-text"><span className="dollar">${pageView["10"]}</span> / month</div>
            </div>
            
            <input className="slider" type="range" />

            <Billing />

            <Footer />
        </div>
    )
}

export default Main
