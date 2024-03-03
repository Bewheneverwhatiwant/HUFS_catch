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

import CulturalCenter_one from './pages/MainPage/AllBuilding/CulturalCenter/Floor/CulturalCenter_one';
import CulturalCenter_two from './pages/MainPage/AllBuilding/CulturalCenter/Floor/CulturalCenter_two';
import CulturalCenter_three from './pages/MainPage/AllBuilding/CulturalCenter/Floor/CulturalCenter_three';
import CulturalCenter_four from './pages/MainPage/AllBuilding/CulturalCenter/Floor/CulturalCenter_four';
import CulturalCenter_five from './pages/MainPage/AllBuilding/CulturalCenter/Floor/CulturalCenter_five';

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
            {
                path: '/culturalcenterone',
                element: <CulturalCenter_one />
            },
            {
                path: '/culturalcentertwo',
                element: <CulturalCenter_two />
            },
            {
                path: '/culturalcenterthree',
                element: <CulturalCenter_three />
            },
            {
                path: '/culturalcenterfour',
                element: <CulturalCenter_four />
            },
            {
                path: '/culturalcenterfive',
                element: <CulturalCenter_five />
            },
        ]
    }
]);