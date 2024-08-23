import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


const AppLayout = () => {
    return (
        <div className="font-poppins container mx-auto">
            <Navbar/>
            <Hero/>
        </div>
    );
};

export default AppLayout;