import React from 'react'

export default function HorizontalCards(props) {
  return (
    <div className="col mt-4">
                        <div className="card  border border-0 mt-4 card-hori mb-3 mx-auto" style={{ maxWidth: "1040px" }}>
                            <div className="row g-0">

                                <div className="col-lg-4 col-md-12">
                                    <div className="card-body ">
                                        <div className="mt-5">

                                            <h2 className="card-title fw-bold"> Best deals <span className="cripsy"> Crispy
                                                Sandwiches</span></h2>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                supporting text below as</p>
                                        </div>
                                        <div className="mt-lg-5 mt-sm-3">
                                            <button className="mt-lg-5 btn  text-white view px-5 w-100">Proceed to order<i
                                                className="bi bi-caret-right-fill"></i> </button>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-lg-8 col-md-12">
                                    <img src={props.src} className="img-fluid rounded-start  " alt="card" />
                                </div>
                            </div>
                        </div>
                    </div>
  )
}
