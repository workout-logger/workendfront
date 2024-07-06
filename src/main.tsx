import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.tsx'
import './index.css'
import WorkoutHome from './workout_home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navbar/>
        <WorkoutHome/>
    </React.StrictMode>,
)
