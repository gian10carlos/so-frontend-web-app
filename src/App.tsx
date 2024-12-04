import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AmountPage, HomePage, LandingPage, SigninPage } from './app/presentation/pages';
import { ProtectedRoutes, RedirectAuth } from './middleware/middleware';
import VoucherPage from './app/presentation/pages/transfer/voucher/page';
import AddressPage from './app/presentation/pages/transfer/address/page';
import SignupPage from './app/presentation/pages/auth/signup/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <RedirectAuth>
            <LandingPage />
          </RedirectAuth>
        } />
        <Route path="/signin" element={
          <RedirectAuth>
            <SigninPage />
          </RedirectAuth>
        } />
        <Route path="/signup" element={
          <RedirectAuth>
            <SignupPage />
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
        <Route path='/transfer/voucher/:account' element={
          <ProtectedRoutes>
            <VoucherPage />
          </ProtectedRoutes>
        } />
      </Routes>
    </Router>
  );
};

export default App;
