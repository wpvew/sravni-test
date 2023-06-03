import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { User } from '../pages/User';
import { ErrorPage } from '../pages/ErrorPage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />}>
          <Route path=':userId' element={<User />} />
        </Route>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
