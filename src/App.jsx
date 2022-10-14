import SideBar from "./components/sideBar/"
import NavBar from "./components/navBar/"
import DashBoard from "./components/dashBoard"
import FooterBar from "./components/footer"
import TableMovies from "./components/tableMovies"
import NotFoundPage from "./components/notFoundPage"
import MovieDetail from "./components/movieDetail"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div id="wrapper">

      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
          <NavBar />
          
          <Routes>

          <Route path="/" element={<DashBoard />} />

          <Route path="/login" element={<LoginPage/>} />

          <Route path="/register" element={<RegisterPage/>} />

          <Route path="/movies" element={<TableMovies />} />
          
          <Route path="/movies/detail/:id" element={<MovieDetail />}/>

          <Route path="*" element={<NotFoundPage />} />

          </Routes>
          
          <FooterBar />
        </div>

      </div>
	  
    </div>
  );
}

export default App;
