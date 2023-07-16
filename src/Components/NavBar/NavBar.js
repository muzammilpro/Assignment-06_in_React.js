import React from 'react'

export default function NavBar() {
  return (
    <div>
      <div className="container bg-white p-3">
            <div className="row">
                <div className="col-3 text-center">
                    <div>
                        <img src="./assets/logo.png" alt="logo" className="img-fluid logo " />
                        <img src="./assets/logo text.png" alt="foodwaGon" className=" foodwaGon img-fluid w-75" />
                    </div>
                </div>

                <div className="col-6 mt-2 text-center center-top">
                    <p><strong>Deliver to: </strong><i className="bi bi-geo-alt-fill icon-location"></i> Current Location
                        <strong>Mohammadpur Bus Stand, Dhaka</strong>
                    </p>
                </div>

                <div className="col-3 mt-1 text-center">
                    <i className="bi bi-search icon-location mt-2 search"></i> <strong className="search">search Food </strong>
                    <button className="btn  button-login ms-2"><i className="bi bi-person-fill icon-location"></i>
                        Login </button>
                </div>
            </div>
        </div>
    </div>
  )
}
