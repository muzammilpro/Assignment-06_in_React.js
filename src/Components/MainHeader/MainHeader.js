import Img1 from '../../Images/Image Base.png'

export default function MainHeader() {
  return (
    <div>
      <div className="container-fluid p-lg-0 p-md-3 p-sm-2 bg-warning">
            <div className="container  p-1">
                <div className="row mt-5 ">
                    <div className="col-lg-7 mt-4 col-md-12 col-sm-12 p-5 order-sm-2">
                        <h1 className="text-white front-text mb-3"> Muzammil Husnain</h1>
                        <h1 className="text-white front-text mb-3"> Are you starving?</h1>
                        <p>Within a few clicks, find meals that are accessible near you</p>
                        <div className="col-12">
                            <div className="card bg-white p-4">
                                <div className="row">

                                    <button className="col-lg-4 col-sm-12 btn btn-delivery fs-5"><i className="bi bi-bicycle fs-3"></i>
                                        Delivery</button>
                                    <button className="col-lg-3 col-sm-12  btn btn-light fs-5">
                                        <i className="bi bi-bag-dash-fill"></i> Pickup
                                    </button>
                                </div>
                                <hr />
                                <br />
                                <div className="row">
                                    <div className="">
                                        <div className="input-group">
                                            <span className="input-group-text input-field mb-2" id="basic-addon1"><i className="bi bi-geo-alt-fill icon-email fs-4"></i></span>
                                            <input type="text" className="form-control border border-start-0 input-field mb-2" placeholder="Enter Your Address" aria-label="Username" aria-describedby="basic-addon1" />
                                            <div className="">
                                                <button className="btn btn-lg text-white  ms-2 find-food"><i className="bi bi-search  fs-6  mt-2"></i> Find Food</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-5 images-bol order-sm-3">
                    <img src={Img1} alt="image" className="img-fluid mt-5" style={{ marginTop: "15vh" }} />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
