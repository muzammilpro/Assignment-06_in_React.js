import FeaturedRestaurantsCards from '../FeaturedRestaurantsCard/FeaturedRestaurantsCards'

export default function FeaturedRestaurants() {
  return (
    <section class="">
    <div class="container mt-5">
        <div class="row mt-4">
            <h1 class="text-center fw-bold mt-5 text-center">Featured Restaurants</h1>

                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />
                    <FeaturedRestaurantsCards />

            


            


            

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
