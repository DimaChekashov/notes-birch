import React, { useCallback, useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./Workspace.css";

interface Props {
  editMode: boolean;
}

const Workspace: React.FC<Props> = ({editMode}) => {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  
  return (
    <div className="workspace">
      {editMode ? (
        <SimpleMDE className="editor" value={value} onChange={onChange} />
      ) : (
        <p>Place for marked text</p>
      )}
    </div>
  )
}

export default Workspace;
