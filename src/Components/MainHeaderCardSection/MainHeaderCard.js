import Cards from '../MainHeaderCard/MainHeaderCard'
import Img1 from '../../Images/card1.png'
import Img2 from '../../Images/card 2.png'
import Img3 from '../../Images/card3.png'
import Img4 from '../../Images/card4.png'

export default function MainHeaderCardSection() {
    return (
        <div>
            <section>
                <div className="container mt-5">
                    <div className="row">


                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                            < Cards scr={Img1}  days="6" />

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                            <Cards scr={Img2}  days="7"/>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                            < Cards scr={Img3}  days="8" />

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                            < Cards scr={Img4}  days="9" />

                        </div>







                    </div>
                </div>
            </section>
        </div>
    )
}
