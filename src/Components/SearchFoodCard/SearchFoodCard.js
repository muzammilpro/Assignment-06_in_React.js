import React from 'react'

export default function SearchFoodCard(props) {
    return (

        <div className="col-lg-2 col-md-4 col-sm-6 mx-auto">
            <img src={props.scr} alt="search" className="img-fluid rounded-circle" />
            <p className="fw-bold mt-3">{props.title}</p>
        </div>

    )
}
