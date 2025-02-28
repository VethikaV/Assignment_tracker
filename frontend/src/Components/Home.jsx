import { useNavigate } from "react-router-dom";
import './CSS/Home.css';
import backgroundImage from '../assets/Home.jpeg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-container">
                <h1>Welcome</h1>
                <div className="button-group">
                    <button className="btn" onClick={() => navigate("/login")}>Login</button>
                    <button className="btn" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
