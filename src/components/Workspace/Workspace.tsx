import React, { useCallback, useEffect, useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import Markdown from 'marked-react';
import "easymde/dist/easymde.min.css";
import "./Workspace.css";
import { Note } from '../../types/types';

interface Props {
  editMode: boolean;
  currentNote: Note | undefined;
  updateNote(value: string): void;
}

const Workspace: React.FC<Props> = ({
  editMode, 
  currentNote = {
    mdText: ""
  },
  updateNote
}) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(currentNote.mdText);
  }, [currentNote]);

  const onChange = useCallback((value: string) => {
    setValue(value);
    updateNote(value);
  }, [updateNote]);
  
  return (
    <div className="workspace">
      {editMode ? (
        <SimpleMDE className="editor" value={value} onChange={onChange} />
      ) : (
        <div className="markdown">
          <Markdown value={value} />
        </div>
      )}
    </div>
  )
}

export default Workspace;
