import React from 'react'

import Button from './Button'

import '../SASS/footer.scss'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <ul className="offer-list">
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>

                <div className="cta-button-container">
                    <Button />
                </div>
                
            </div>
        </>
    )
}

export default Footer
