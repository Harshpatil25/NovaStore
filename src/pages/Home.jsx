import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Categories from "../components/Categories/Categories.jsx";
import FeatureProduct  from "../components/FeatureProduct/FeatureProduct.jsx";
import Testimonial from "../components/Testimonials/Testimonial.jsx"
import NewsLetter from "../components/NewsLetter/NewsLetter.jsx";
import Footer from '../components/Footer/Footer.jsx'

function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <Categories />
            <FeatureProduct />
            <Testimonial />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home;