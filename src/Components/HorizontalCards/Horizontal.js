import HorizontalCards from './HorizontalCards';
import Img1 from '../../Images/card horizontal1.png'
import Img2 from '../../Images/tikka.jpg'
import Img3 from '../../Images/pizza.jpg'

export default function Horizontal() {
    return (
        <div>
            <div className="container p-4 mt-5">
                <div className="row ">
                   <HorizontalCards src={Img1} />
                </div>



                <div className="row ">
                    <div className="col mt-4">
                        <div className="card  border border-0 mt-4 card-hori mb-3 mx-auto" style={{ maxWidth: "1040px" }}>
                            <div className="row g-0">
                                <div className="col-lg-8 col-md-12">
                                    <img src={Img2} className="img-fluid rounded-start img2" alt="card" />
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card-body ">
                                        <div className="mt-5">

                                            <h2 className="card-title fw-bold">Celebrate parties
                                                <span className="cripsy"> with Fried Chicken</span>
                                            </h2>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                supporting text below as</p>
                                        </div>
                                        <div className="mt-lg-5 mt-sm-3">
                                            <button className="mt-lg-5 btn  text-white view px-5 ">Proceed to order<i
                                                className="bi bi-caret-right-fill"></i> </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="row ">
                <HorizontalCards src={Img3} />
                </div>
            </div>

        </div>
    );
}
