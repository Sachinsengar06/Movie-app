import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import DetailPage from '../pages/detailPage/DetailPage'
import DashBoard from '../pages/dashBoard/DashBoard'
import LayoutWithHeader from './LayoutWithHeader'
import Discover from '../pages/discover/Discover'
import Login from '../pages/login/Login'
import BookMarkedItems from '../pages/bookMarkedItems/BookMarkedItems'
import Video from '../components/videoComponent/Video'
import MoviePage from '../components/moviePage/MoviePage'
import Categories from '../pages/categories/Categories'
const Navigation = () => {

  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<DashBoard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path = '/home' element={<LayoutWithHeader><HomePage/></LayoutWithHeader>}/>
                <Route path = '/detail/:movieId' element={<LayoutWithHeader><DetailPage/></LayoutWithHeader>}/>
                <Route path = '/discover' element={<LayoutWithHeader><Discover/></LayoutWithHeader>}/>
                <Route path='/bookmarked' element={<LayoutWithHeader><BookMarkedItems/></LayoutWithHeader>}/>
                <Route path='/video/:movieId' element={<Video/>}/>
                <Route path ='/moviepage' element={<LayoutWithHeader><MoviePage newApi={''} /></LayoutWithHeader>}/>
                <Route path = '/Categories' element = {<LayoutWithHeader><Categories/></LayoutWithHeader>}/>
            </Routes>
        </Router>
      
    </div>
  )
}

export default Navigation;
