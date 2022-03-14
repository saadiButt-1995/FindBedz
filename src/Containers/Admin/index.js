import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../../Components/Admin/Dashboard'
import Shelters from '../../Components/Admin/Shelters'
import Agencies from '../../Components/Admin/Agencies'
import Individuals from '../../Components/Admin/Individuals'

const Index = () => {
      
    return (
        <>
        <Routes>
            <Route index path="" element={<Dashboard />} />
            <Route path="shelters" element={<Shelters />} />
            <Route path="agencies" element={<Agencies />} />
            <Route path="individuals" element={<Individuals />} />
        </Routes>
        </>
    )
}

export default Index