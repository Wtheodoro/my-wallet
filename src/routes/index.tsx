import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes'

const routes: React.FC = () => {
  return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  )
}

export default routes;