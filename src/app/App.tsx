import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Workspace from '../components/Workspace/Workspace';
import './App.css';

function App() {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <div className="app">
      <Header />
      <div className="app__layout">
        <Sidebar />
        <Workspace editMode={editMode} />
      </div>
    </div>
  );
}

export default App;
