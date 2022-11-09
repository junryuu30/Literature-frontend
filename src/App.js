import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import "./css/style.css"
import Search from './pages/Search';
import Profile from './pages/Profile';
import LandingLi from "./pages/LandingLi";
import TryProfile from './pages/TryProfile';
import AllNavbar from './components/AllNavbar';
import SearchResult from './pages/SearchResult';
import DetailLiteratur from './pages/DetailLiteratur';
import MyCollection from './pages/MyCollection';
import AddLiterature from './pages/AddLiterature';
import BookVerification from './pages/BookVerification';
import Home from './pages/Home';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route exac path="/" element={<Home />} />
      <Route exac path="/search" element={<Search />} />
      <Route exac path="/search-result" element={<SearchResult />} />
      <Route exac path="/profile" element={<Profile />} />
      <Route exac path="/my-collection" element={<MyCollection />} />
      <Route exac path="/add-literature" element={<AddLiterature />} />
      <Route exac path="/detail-literature" element={<DetailLiteratur />} />
      <Route exac path="/verification" element={<BookVerification />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
