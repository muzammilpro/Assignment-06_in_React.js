import NavBar from '../Components/NavBar/NavBar'
import MainHeader from '../Components/MainHeader/MainHeader'
import MainHeaderCardSection from '../Components/MainHeaderCardSection/MainHeaderCard'
import HowDoes from '../Components/HowDoes/HowDoes'
import PopularItems from '../Components/PopularItems/PopularItems'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <MainHeader />
            < MainHeaderCardSection />
            <HowDoes />
            <PopularItems />

        </div>
    )
}
