// App.js
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'; // Import the PrivateRoute component
import CreateThingsHomepage from './pages/CreateThingsHomepage';

// Lazy load components
const PlansAndPricing = lazy(() => import('./pages/PlansAndPricing'));
const PurchaseHistory = lazy(() => import('./pages/PurchaseHistory'));
const Prompt = lazy(() => import('./pages/Prompt'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const ForgotPassword = lazy(() => import('./component/ForgotPassword'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<SignIn />} />
        <Route path='/logout' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/craft' element={<CreateThingsHomepage/>}/>

        {/* Protected routes */}
        <Route
          path='/prompt'
          element={
            <PrivateRoute>
              <Prompt />
            </PrivateRoute>
          }
        />
        <Route
          path='/purchasehistory'
          element={
            <PrivateRoute>
              <PurchaseHistory />
            </PrivateRoute>
          }
        />
        <Route
          path='/plan'
          element={
            <PrivateRoute>
              <PlansAndPricing />
            </PrivateRoute>
          }
        />

        {/* Catch-all route for undefined paths */}
        <Route path='*' element={<div>404 Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
