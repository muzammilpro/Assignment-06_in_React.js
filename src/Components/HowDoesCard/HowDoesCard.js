import React from 'react'

export default function HowDoesCard(props) {
    return (
        <div>
            


            <div className="card-body">
                        <img src={props.scr} className="card-img-end img-fluid mt-4" alt="image" />
                        <h6 className="fw-bold">Select Location</h6>
                        <p className="card-text">Some quick example text to build on the card title and.</p>
                    </div>

        </div>
    )
}
