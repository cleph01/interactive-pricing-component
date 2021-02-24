import React, {useState} from 'react'

import Billing from './Billing'

import Footer from './Footer'

import '../SASS/main.scss'


function Main() {

    const [pageView, setPageView] = useState()

    const handleChange = e => {

        setPageView(e.target.value);
    }

    console.log("Range Value: ", pageView)

    return (
        <div className="pricing-component">
            <div className="pricing-header">
                <div className="pricing-header-text">10K PAGEVIEWS</div>
                <div className="pricing-header-text"><span className="dollar">$test.00</span> / month</div>
            </div>
            
            <input className="slider"
                    // color={} 
                    type="range" 
                    min="10" 
                    max="1000" 
                    value={pageView} 
                    onChange={handleChange} />

            <Billing />

            <Footer />
        </div>
    )
}

export default Main
