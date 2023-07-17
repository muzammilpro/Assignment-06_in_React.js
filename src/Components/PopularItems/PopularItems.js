import PopularItemsCards from '../PopularItemsCard/PopularItemsCards'

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


                        
                            <PopularItemsCards />
                            <PopularItemsCards />
                            <PopularItemsCards />
                            <PopularItemsCards />
                            <PopularItemsCards />

                        

                       


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
