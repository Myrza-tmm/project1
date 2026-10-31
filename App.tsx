import React, { useState } from 'react';

import Login from './src/components/Login';
import ForgetPassword from './src/components/ForgetPassword';
import NumberVerification from './src/components/NumberVerification';
import ResetPassword from './src/components/ResetPassword';
import Registration from './src/components/Registration';
import SelectCity from './src/components/SelectCity';
import MainPage from './src/components/MainPage'
import ProfilePage from './src/components/ProfilePage'
import Services from './src/components/Services';

export default function App() {
  const [page, setPage] = useState('login');

  if (page === 'login') {
    return (
      <Login
        onBack={() => setPage('login')}
        onForgetPassword={() => setPage('forget')}
        onRegister={() => setPage ('registration')}
        onContinue={() => setPage('mainpage')}
      />
    );
  }

  if (page === 'mainpage') {
    return (
      <MainPage
      onBack={() => setPage ('login')}
      onContinue={() => console.log('Басты бет басылды')}
      onProfile={() => setPage('profile')}
      onServices={() => setPage('services')}
      />
    );
  }

  if (page === 'services') {
    return (
      <Services
         onBack={() => setPage('mainpage')}
      />
    );
  }

  if (page === 'profile') {
    return (
      <ProfilePage
        onBack={() => setPage('mainpage')}
        onLogout={() => setPage('login')} 
      />
    );
  }

  if (page === 'selectcity') {
    return (
      <SelectCity
         onBack={() => setPage('login')}
         onContinue={() => console.log('Қала таңдалды')}
         />
    );
  }

  if (page === 'registration') {
    return (
      <Registration 
        onBack={() => setPage('login')}
        onContinue={() => setPage('selectcity')}
        />
    );
  }

  if (page === 'forget') {
    return (
      <ForgetPassword
        onBack={() => setPage('login')}
        onContinue={() => setPage('verification')}
      />
    );
  }

  if (page === 'verification') {
    return (
      <NumberVerification
        onBack={() => setPage('forget')}
        onContinue={() => setPage('password')}
      />
    );
  }

  if (page === 'password') {
    return (
      <ResetPassword
        onBack={() => setPage('verification')}
        onContinue={() => setPage('login')}
      />
    );
  }

  return null;
}