import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CommunityPage from './components/community/CommunityPage'
import CommunitiesPage from './components/community/CommunitiesPage'
import OpenSpacesPage from './components/community/OpenSpacesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/communities" element={<CommunitiesPage />} />
      <Route path="/open-spaces" element={<OpenSpacesPage />} />
    </Routes>
  )
}

export default App
