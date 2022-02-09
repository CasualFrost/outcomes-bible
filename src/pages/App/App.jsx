import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ListPage from '../ListPage/ListPage';
import ResourceList from '../ResourceList/ResourceList';
import NavBar from '../../components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourceDetailPage from '../ResourceDetailPage/ResourceDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/lists" element={<ListPage />} />
            <Route path="/resources" element={<ResourceList />} />
            <Route path="/resources/:id" element={<ResourceDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
