import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './context/auth-context';

import { RegisterView } from './pages/RegisterView';
import { HomeView } from './pages/HomeView';
import { About } from './pages/AbouteView';
import { PrivateRoute } from './components/PrivateRoute.js';
import { PublicRoute } from './components/PublicRoute.js';

const AppRouter = () => {
  const { fetchCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomeView />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          }
        />

        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
