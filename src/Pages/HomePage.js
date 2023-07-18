import NavBar from '../Components/NavBar/NavBar'
import MainHeader from '../Components/MainHeader/MainHeader'
import MainHeaderCardSection from '../Components/MainHeaderCardSection/MainHeaderCard'
import HowDoes from '../Components/HowDoes/HowDoes'
import PopularItems from '../Components/PopularItems/PopularItems'
import FeaturedRestaurants from '../Components/FeaturedRestaurants/FeaturedRestaurants'
import SearchFood from '../Components/SearchFood/SearchFood'
import App from '../Components/App/App'
import Footer from '../Components/Footer/Footer'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <MainHeader />
            < MainHeaderCardSection />
            <HowDoes />
            <PopularItems />
            <FeaturedRestaurants />
            <SearchFood />
            < App />



            <Footer />

        </div>
    )
}
