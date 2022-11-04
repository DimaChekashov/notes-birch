import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Workspace from '../components/Workspace/Workspace';
import { Note } from '../types/types';
import './App.css';

const noteDb: Note[] = [
  {
    id: 1,
    title: "Title",
    date: "01.11.11",
    additionalText: "additional text",
    text: "# Marked in the browser\n\nRendered by **marked**."
  },
  {
    id: 2,
    title: "Title 2",
    date: "02.11.11",
    additionalText: "additional text 2",
    text: "# Marked in the browser\n\nRendered by **marked**."
  }
];

const App: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>(noteDb);

  return (
    <div className="app">
      <Header editMode={editMode} setEditMode={setEditMode} />
      <div className="app__layout">
        <Sidebar notes={notes} />
        <Workspace editMode={editMode} />
      </div>
    </div>
  );
}

export default App;
