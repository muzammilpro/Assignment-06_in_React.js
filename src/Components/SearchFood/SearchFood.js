import SearchFoodCard from '../SearchFoodCard/SearchFoodCard'
import Img1 from '../../Images/search1.png'
import Img2 from '../../Images/search2.png'
import Img3 from '../../Images/search3.png'
import Img4 from '../../Images/search4.png'
import Img5 from '../../Images/search5.png'
import Img6 from '../../Images/search6.png'

export default function SearchFood() {
    return (

        <section className="mt-5">
            <div className="container-fluid mt-5 search-food p-lg-5 p-md-3">
                <div className="container">

                    <div className="row">
                        <div className="col-3 text-center mt-3">
                            <h2 className="fw-bold mt-2">Search by Food</h2>
                        </div>
                        <div className="col-9 text-end mt-2">
                            <div className="view-all">
                                <p className="mb-0">View All <i className="bi bi-caret-right-fill"></i>&nbsp; <i className="bi bi-arrow-left-circle-fill fs-1"></i> <i className="bi bi-arrow-right-circle-fill fs-1"></i> </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 text-center">

                        <SearchFoodCard scr={Img1} title="Pizza" />
                        <SearchFoodCard scr={Img2} title="Burger" />
                        <SearchFoodCard scr={Img3} title="Noodles" />
                        <SearchFoodCard scr={Img4} title="Sub-sandiwch" />
                        <SearchFoodCard scr={Img5} title="Chowmein" />
                        <SearchFoodCard scr={Img6} title="Steak" />

                    </div>

                </div>
            </div>

        </section>

    )
}
