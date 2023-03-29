import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RegisterForm } from './Register/Register';
import { Contacts } from './Contacts/Contacts';
import { refreshUser } from 'redux/auth/authOperations';

import { Layout } from './Layout';
import { LoginForm } from './LoginForm/LoginForm';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
