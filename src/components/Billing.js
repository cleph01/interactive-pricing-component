import React, { useState } from 'react'

import Switch from "react-switch"

import '../SASS/billing.scss'

function Billing() {

    const [ checked, setChecked ] = useState(false);

    const handleChange = () => {

        setChecked(!checked)

    }

    console.log("Checked Status: ", checked)

    return (
        <div className="billing-container">
            <div className="billing-options">
                Monthly Billing
            </div>
            <Switch onChange={handleChange} checked={checked} />
            <div className="billing-options">
                Yearly Billing
            </div>
            <div className={checked ? 'discount': 'hidden'} >
                25% Discount
            </div>
        </div>
    )
}

export default Billing
