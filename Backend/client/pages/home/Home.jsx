import NavBar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = () =>{
    return(
        <div className="home">
            <NavBar />
            <Featured type="movie"/>

                <List />
                <List />
                <List />
                <List />
                
                </div>
    );

};
