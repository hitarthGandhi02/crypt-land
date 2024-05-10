import Header from "./Header";
import Navbar from "./Navbar";
import './Newsify.css';
import { Registration, Brands } from "./Registration";
import Feature from "./Feature";
import Services from './Services'
import Review from "./Review";
import FreeTrail from "./FreeTrail";
import Footer from "./Footer";
import FAQ from "./FAQ";
const  Newsify = () => {
    return (
        <div className="newsifyContainer">
            < Header/>
            <Navbar />
            <Registration />
            <Brands />
            <Feature />
            <Services />
            <Review />
            < FAQ/>
            <FreeTrail />
            <Footer />
        </div>
    )
 } 
 export default Newsify;