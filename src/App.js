import Header from "./Header";
import NavBar from "./NavBar";
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
            <Main />
            <Footer />
        </>
    )
};

export default App;