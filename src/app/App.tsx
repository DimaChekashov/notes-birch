import React, { useRef, useState } from 'react';
import { Modal, Button, Input, InputRef, notification } from 'antd';
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
      const notes = await db.notes.toArray();

      setNotes(notes);
    }
  );

  const createNote = () => {
    if(nameNoteInput) {
      try {
        const option = {
          title: nameNoteInput,
          date: Date.now(),
          additionalText: "additional text",
          mdText: "# Type your note"
        }
        const note = db.notes.add(option);

        note.then((e) => {
          setCurrentNote({
            id: e as number,
            ...option
          });
        })
      } catch (error) {
        notification['error']({
          message: error as string
        });
      }
      setIsCreateNoteModalOpen(false);
      setNameNoteInput("");
    } else {
      notification['error']({
        message: 'Enter note name!',
        duration: 2.5
      });
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
      notification['error']({
        message: error as string
      });
    }
  }

  const deleteNote = () => {
    try {
      if(currentNote?.id) {
        db.notes.delete(currentNote.id);
        setCurrentNote(undefined);
      }
    } catch (error) {
      notification['error']({
        message: error as string
      });
    }
  }

  return (
    <>
      <div className="app">
        <Header 
          setCreateNoteModal={setIsCreateNoteModalOpen}
          deleteNote={deleteNote}
          currentNote={{
            note: currentNote,
            setNote: setCurrentNote
          }}
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
            setEditMode={setEditMode}
            currentNote={{
              note: currentNote,
              setNote: setCurrentNote
            }}
            searchQuery={{
              query: searchQuery,
              setQuery: setSearchQuery
            }}
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
