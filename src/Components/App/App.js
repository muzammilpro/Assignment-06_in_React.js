import Img from '../../Images/clock.png'
import Img2 from '../../Images/app with back.png'

export default function App() {
    return (
        <section>

            <div classNameName="container-fluid  mobile-sec text-center">
                <div classNameName="row">
                    <div classNameName="col-6 mt-2">
                        {/* <img src={Img} alt="clock" classNameName="img-fluid w-75 overimg" /> */}
                    </div>
                </div>

                <div classNameName="container-fluid">
                    <div className="container-fluid mobile-sec">
                        <div className="row">
                            <div className="col-12">
                                <img src={Img2} alt="clock" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}
