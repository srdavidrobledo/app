import Header from "./Header";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
import Footer from "./Footer";
import "./stilo.scss";



function App() {
    return (
        <>
            <div className="navegacion shadow p-3 mb-5 bg-body rounded ">
                <Header />
                <NavBar /> 
            </div>
            <ItemListContainer  
             greeting="Bienvendios a la web mas gamer que existe."  
            />
            <Main/>   
            <Footer />
        </>
    )
};

export default App;