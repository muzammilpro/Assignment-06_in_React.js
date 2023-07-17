import React from 'react'

export default function PopularItemsCards() {
  return (
    <div className="col-lg-2 col-md-4 col-sm-12 mt-5">
    <div className="card border border-0 text-start mx-auto" style={{width: "12rem"}}>
        <img src="./assets/order 1.png" className="card-img-end img-fluid mt-4 rounded-4" alt="image" />
        <div className="card-body">
            <h6 className="fw-bold"> Chees Burger</h6>
            <h6 className="color-text"><i className="bi bi-geo-alt-fill"></i> Burger Arina </h6>
            <h6>$38.88</h6>
            <button className="btn btn-lg  find-food btn-order text-white">Order Now</button>
        </div>
    </div>

</div>
  )
}
