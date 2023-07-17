import React from 'react'

export default function PopularItemsCards(props) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-12 mt-5">
    <div className="card border border-0 text-start mx-auto" style={{width: "12rem"}}>
        <img src={props.scr} className="card-img-end img-fluid mt-4 rounded-4" alt="image" />
        <div className="card-body">
            <h6 className="fw-bold"> {props.title}r</h6>
            <h6 className="color-text"><i className="bi bi-geo-alt-fill"></i> {props.Text} </h6>
            <h6>${props.price}</h6>
            <button className="btn btn-lg  find-food btn-order text-white">Order Now</button>
        </div>
    </div>

</div>
  )
}
