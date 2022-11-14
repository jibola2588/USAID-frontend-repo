import { useState, Suspense, lazy } from "react";
import { PageLoader } from "./components/page-loader";
import { Routes, Route, Link } from "react-router-dom";

const Login = lazy(() =>
  import(/*webpackChunkName:'login Page'*/ "./pages/authed/login/Login")
);

const ForgottonPassword = lazy(() =>
  import(
    /*webpackChunkName:'login Page'*/ "./pages/authed/forgot-password/ForgottonPassword"
  )
);

const ForgotPassword = lazy(() =>
  import(
    /*webpackChunkName:'ForgotPassword Page'*/ "./components/ForgotPassword"
  )
);

const CheckMailBox = lazy(() =>
  import(/*webpackChunkName:'CheckMailBox Page'*/ "./components/CheckMailBox")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgottonPassword" element={<ForgottonPassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/checkMailBox" element={<CheckMailBox />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
