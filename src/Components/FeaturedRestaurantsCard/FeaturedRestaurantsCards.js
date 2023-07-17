import React from 'react';

export default function FeaturedRestaurantsCards(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="card border border-0 text-start mx-auto" style={{ width: "16rem" }}>
                <img src={props.scr1} className="card-img-end img-fluid mt-4 rounded-4" alt="image" />
                <div className="card-body">
                    <div className="row">
                        <div className="d-flex" style={{ marginLeft: "-10px" }}>
                            <img src={props.scr2} className="img-fluid w-25 me-3" alt="" />
                            <span className="fw-bold">
                                Food World
                                <br />
                                <p className="world">
                                    <i className="bi bi-star-fill"></i>&nbsp; 46
                                </p>
                            </span>
                        </div>
                        <button className="btn btn-delivery mt-3 fw-bold w-75">Open tomorrow</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
