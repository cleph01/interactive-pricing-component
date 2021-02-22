import React from 'react'

import Billing from './Billing'

import Footer from './Footer'

import '../SASS/main.scss'


function Main() {
    return (
        <div className="pricing-component">
            <div className="pricing-header">
                Pageviews
                $ /month
            </div>
            
            <input className="slider" type="range" />

            <Billing />

            <Footer />
        </div>
    )
}

export default Main
