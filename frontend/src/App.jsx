import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Pages
import LoginPage from "./pages/LoginPage.jsx"
import ProfilePage from './pages/ProfilePage.jsx';
import SettingPage from './pages/SettingsPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import CvsPage from './pages/CvsPage.jsx';
import AssetsPage from './pages/AssetsPage.jsx'
import AssetCategoryPage from './pages/AssetCategoryPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

// Layouts
import Base from './layouts/Base.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx'
import RequireAuth from './layouts/RequireAuth.jsx';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Base/>} errorElement={<ErrorPage/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
        </Route>,
        <Route path='/' element={<RequireAuth/>}>
        <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<FeedPage/>}/>
        <Route path="cvs" element={<CvsPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="settings" element={<SettingPage/>}/>
        <Route path="assets" element={<AssetsPage/>}/>
        <Route path="assets/categories/:categoryId" element={<AssetCategoryPage/>}/>
        </Route>

        </Route>,
    ])
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
