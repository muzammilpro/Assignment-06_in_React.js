import FeaturedRestaurantsCards from '../FeaturedRestaurantsCard/FeaturedRestaurantsCards'
// Top Images
import Img1 from '../../Images/feature1.png'
import Img2 from '../../Images/feature2.png'
import Img3 from '../../Images/feature3.png'
import Img4 from '../../Images/feature4.png'
import Img5 from '../../Images/feature5.png'
import Img6 from '../../Images/feature6.png'
import Img7 from '../../Images/feature7.png'
import Img8 from '../../Images/feature8.png'
// Features Images
import Img9 from '../../Images/featurelogo1.png'
import Img10 from '../../Images/featurelogo2.png'
import Img11 from '../../Images/featurelogo3.png'
import Img12 from '../../Images/featurelogo4.png'
import Img13 from '../../Images/featurelogo5.png'
import Img14 from '../../Images/featurelogo7.png'
import Img15 from '../../Images/featurelogo8.png'
import Img16 from '../../Images/featurelogo8.png'

export default function FeaturedRestaurants() {
    return (
        <section class="">
            <div class="container mt-5">
                <div class="row mt-4">
                    <h1 class="text-center fw-bold mt-5 text-center">Featured Restaurants</h1>

                    <FeaturedRestaurantsCards scr1={Img1} scr2={Img9} title="Food World" rating="46" time="Open tomorrow" />
                    <FeaturedRestaurantsCards scr1={Img2} scr2={Img10} title="PizzaHUb" rating="40" time="Open tomorrow" />
                    <FeaturedRestaurantsCards scr1={Img3} scr2={Img11} title="Donuts hut" rating="20" time="Open Now" />
                    <FeaturedRestaurantsCards scr1={Img4} scr2={Img12} title="Donuts hut" rating="50" time="Open Now" />
                    <FeaturedRestaurantsCards scr1={Img5} scr2={Img13} title="Ruby Tuesday" rating="26" time="Open Now" />
                    <FeaturedRestaurantsCards scr1={Img6} scr2={Img14} title="Kuakata Fried Chicken" rating="53" time="Open Now" />
                    <FeaturedRestaurantsCards scr1={Img7} scr2={Img15} title="Red Square" rating="45" time="Open Now" />
                    <FeaturedRestaurantsCards scr1={Img8} scr2={Img16} title="Taco Bell" rating="35" time="Open Now" />

                    <div class="col-12 text-center mt-5">
                        <div>
                            <button class="mt-3 btn btn-lg px-4 text-white view">View All <i class="bi bi-caret-right-fill"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
