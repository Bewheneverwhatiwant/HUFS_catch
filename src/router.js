import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import AirPlane from './pages/MainPage/AirPlane/AirPlane';
import HundredYear from './pages/MainPage/AllBuilding/HundredYear/HundredYear';
import CulturalCenter from './pages/MainPage/AllBuilding/CulturalCenter/CulturalCenter';
import Economy from './pages/MainPage/AllBuilding/Economy/Economy';
import Engineering from './pages/MainPage/AllBuilding/Engineering/Engineering';
import HufsDorm from './pages/MainPage/AllBuilding/HufsDorm/HufsDorm';
import Library from './pages/MainPage/AllBuilding/Library/Library';
import MyungSoo from './pages/MainPage/AllBuilding/MyungSoo/MyungSoo';
import NaturalScience from './pages/MainPage/AllBuilding/NaturalScience/NaturalScience';
import StudentCenter from './pages/MainPage/AllBuilding/StudentCenter/StudentCenter';
import Welfare from './pages/MainPage/AllBuilding/Welfare/Welfare';

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/airplane",
                element: <AirPlane />
            },
            {
                path: '/culturalcenter',
                element: <CulturalCenter />
            },
            {
                path: '/economy',
                element: <Economy />
            },
            {
                path: '/hufsdorm',
                element: <HufsDorm />
            },
            {
                path: '/hundredyear',
                element: <HundredYear />
            },
            {
                path: '/library',
                element: <Library />
            },
            {
                path: '/myungsoo',
                element: <MyungSoo />
            },
            {
                path: '/naturalscience',
                element: <NaturalScience />
            },
            {
                path: '/studentcenter',
                element: <StudentCenter />
            },
            {
                path: '/welfare',
                element: <Welfare />
            },
            {
                path: '/engineering',
                element: <Engineering />
            },
        ]
    }
]);