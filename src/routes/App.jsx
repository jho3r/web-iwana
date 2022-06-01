import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import AppContext from '@context/AppContext'
import '@styles/global.scss'

const App = () => {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
