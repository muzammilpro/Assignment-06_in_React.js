import React from 'react'

export default function MainHeaderCard(props) {
  return (
    <div>


     

      <div className="card mx-auto border border-0 mx-2" style={{ width: "16rem" }} >
          <img src={props.scr} className="card-img-top img-fluid" alt="card" />
          <div className="card-body mx-0">
            <h6 className="card-title fw-bold">Greys Vage</h6>
            <a href="   /#" className="btn btn-delivery">{props.days} Days Remaining</a>
          </div>
        </div>





    </div>
  )
}
