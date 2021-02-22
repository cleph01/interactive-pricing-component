import React from 'react'

import Switch from "react-switch"

import '../SASS/billing.scss'

function Billing() {
    return (
        <div className="billing-container">
            <div className="billing-options">
                Monthly Billing
            </div>
            <Switch />
            <div className="billing-options">
                Yearly Billing
            </div>
            <div className="discount">
                25% Discount
            </div>
        </div>
    )
}

export default Billing
