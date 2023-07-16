import HowDoesCard from '../HowDoesCard/HowDoesCard'

export default function HowDoes() {
    return (
        <div>
            <section>
                <div className="container-fluid section-3rd p-5 mt-5">
                    <div className="container">

                        <div className="row g-5">
                            <h1 className="fw-bold how text-center mt-5">How does IT work</h1>


                            <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="card mx-auto bg-transparent border border-0 text-center" style={{ width: "18rem" }} >
                                <HowDoesCard />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="card mx-auto bg-transparent border border-0 text-center" style={{ width: "18rem" }} >
                                <HowDoesCard />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="card mx-auto bg-transparent border border-0 text-center" style={{ width: "18rem" }} >
                                <HowDoesCard />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="card mx-auto bg-transparent border border-0 text-center" style={{ width: "18rem" }} >
                                <HowDoesCard />
                                </div>
                            </div>

                          








                        </div>
                    </div>
                </div></section>
        </div>
    )
}
