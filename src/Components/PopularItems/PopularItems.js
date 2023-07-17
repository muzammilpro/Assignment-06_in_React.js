import PopularItemsCards from '../PopularItemsCard/PopularItemsCards'
import img1 from '../../Images/order 1.png'
import img2 from '../../Images/order 2.png'
import img3 from '../../Images/order3.png'
import img4 from '../../Images/order 4.png'
import img5 from '../../Images/order 5.png'

export default function PopularItems() {
    return (
        <div>

            <section className="mt-5">
                <div className="container-fluid mt-5">
                    <div className="row">

                        <h1 className="fw-bold text-center">Popular Items</h1>
                        <div className="col-1  d-flex align-items-center justify-content-end">
                            <h1 className=" ">
                                <i className="bi bi-arrow-left-circle-fill icon-arrow"></i>
                            </h1>
                        </div>



                        <PopularItemsCards scr={img1} title="Chees Burger" price="38.88" Text=" Burger Arina" />
                        <PopularItemsCards scr={img2} title="Toffe's Cake" price="4.00" Text=" Top Sticks" />
                        <PopularItemsCards scr={img3} title="Dancake" price="1.99" Text=" Cake World" />
                        <PopularItemsCards scr={img4} title="Crispy Sandwitch" price="3.00" Text=" Fastfood Dine" />
                        <PopularItemsCards scr={img5} title="Thai Soup" price="2.79" Text=" Foody man" />






                        <div className="col-1  d-flex align-items-center">
                            <h1 className="">
                                <i className="bi bi-arrow-right-circle-fill icon-arrow"></i>
                            </h1>
                        </div>


                    </div>

                </div>

            </section>

        </div>
    )
}
