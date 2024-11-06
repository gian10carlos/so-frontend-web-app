import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AmountPage, HomePage, SigninPage } from './app/presentation/pages';
import { ProtectedRoutes, RedirectAuth } from './middleware/middleware';
import VoucherPage from './app/presentation/pages/transfer/voucher/page';
import AddressPage from './app/presentation/pages/transfer/address/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <RedirectAuth>
            <SigninPage />
          </RedirectAuth>
        } />
        <Route path='/home' element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        } />
        <Route path='/transfer' element={
          <ProtectedRoutes>
            <AddressPage />
          </ProtectedRoutes>
        } />
        <Route path='/transfer/:account' element={
          <ProtectedRoutes>
            <AmountPage />
          </ProtectedRoutes>
        } />
        <Route path='/transfer/:account/:voucher' element={
          <ProtectedRoutes>
            <VoucherPage />
          </ProtectedRoutes>
        } />
      </Routes>
    </Router>
  );
};

export default App;