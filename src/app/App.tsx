import React, { useRef, useState } from 'react';
import { Modal, Button, Input, InputRef } from 'antd';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Workspace from '../components/Workspace/Workspace';
import { Note } from '../types/types';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from '../db';
import './App.css';

const App: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [nameNoteInput, setNameNoteInput] = useState<string>("");
  const nameNoteInputRef = useRef<InputRef>(null);
  
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState<boolean>(false);

  useLiveQuery(
    async () => {
      const notes = await db.notes
        .toArray();

      setNotes(notes);
    }
  );

  const createNote = () => {
    if(nameNoteInput) {
      try {
        db.notes.add({
          title: nameNoteInput,
          date: Date.now(),
          additionalText: "additional text",
          mdText: "# Type your note"
        })
      } catch (error) {
        alert(error);
      }
      setIsCreateNoteModalOpen(false);
      setNameNoteInput("");
    } else {
      nameNoteInputRef.current!.focus({
        cursor: 'start',
      });
    }
  }

  const cancelCreateNote = () => {
    setIsCreateNoteModalOpen(false);
    setNameNoteInput("");
  }

  const updateNote = (value: string) => {
    try {
      if(currentNote?.id) {
        db.notes.update(currentNote.id, {
          date: Date.now(),
          mdText: value,
          additionalText: value.substring(0, 30) + "..."
        })
      }
    } catch (error) {
      alert(error);
    }
  }

  const deleteNote = () => {
    try {
      if(currentNote?.id) {
        db.notes.delete(currentNote.id);
        setCurrentNote(undefined);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="app">
        <Header 
          setCreateNoteModal={setIsCreateNoteModalOpen}
          deleteNote={deleteNote}
          currentNote={currentNote}
          editMode={{
            status: editMode,
            setStatus: setEditMode
          }}
          searchQuery={{
            query: searchQuery,
            setQuery: setSearchQuery
          }}
        />
        <div className="app__layout">
          <Sidebar 
            notes={notes} 
            currentNote={{
              note: currentNote,
              setNote: setCurrentNote
            }}
            setEditMode={setEditMode}
            searchQuery={searchQuery}
          />
          <Workspace 
            editMode={editMode} 
            currentNote={currentNote}
            updateNote={updateNote}
          />
        </div>
      </div>
      <Modal 
        title="Create a note" 
        open={isCreateNoteModalOpen}
        onOk={createNote}
        onCancel={cancelCreateNote}
        footer={[
          <Button 
            key="back" 
            onClick={cancelCreateNote}
          >
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            onClick={createNote}
          >
            Create
          </Button>,
        ]}
      >
        <Input 
          placeholder="Type note name" 
          ref={nameNoteInputRef}
          value={nameNoteInput} 
          onChange={(e: React.FormEvent<HTMLInputElement>) => setNameNoteInput(e.currentTarget.value)}
        />
      </Modal>
    </>
  );
}

export default App;
