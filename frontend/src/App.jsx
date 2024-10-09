import './App.css'
import LandingPage from './pages/landing'
import SideNav from './components/SideNav'
import CvCard from "./components/CvCard.jsx"
import InfoCard from "./components/InfoCard.jsx"
import AboutMeForm from "./components/AboutMeForm.jsx"
import ListCard from "./components/ListCard.jsx"
import ListCardBtnIcon from "./components/ListCardBtnIcon.jsx"
import PersonalInfo from "./components/PersonalInfoForm.jsx"
import SkillCard from "./components/SkillsCard.jsx"
import ListCardHeading from "./components/ListCardHeading.jsx"
import Dashboard from "./layouts/DashboardLayout.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Pages
import Login from "./pages/Login.jsx"

// Layouts
import Base from './layouts/Base.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Signup from './pages/Signup.jsx';
import Feed from './pages/Feed.jsx';
import Cvs from './pages/Cvs.jsx';
import Profile from './pages/Profile.jsx';
import Setting from './pages/Settings.jsx';
import Assets from './pages/Assets.jsx'

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Base/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
        </Route>,
        <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<Feed/>}/>
            <Route path="cvs" element={<Cvs/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Setting/>}/>
            <Route path="assets" element={<Assets/>}/>
        </Route>
    ])
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
