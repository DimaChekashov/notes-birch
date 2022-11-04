import React, { useCallback, useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import Markdown from 'marked-react';
import "easymde/dist/easymde.min.css";
import "./Workspace.css";

interface Props {
  editMode: boolean;
}

const Workspace: React.FC<Props> = ({editMode}) => {
  const [value, setValue] = useState<string>("# Marked in the browser\n\nRendered by **marked**.");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  
  return (
    <div className="workspace">
      {editMode ? (
        <SimpleMDE className="editor" value={value} onChange={onChange} />
      ) : (
        <div className="markdown">
          <Markdown value={"# Marked in the browser\n\nRendered by **marked**."} />
        </div>
      )}
    </div>
  )
}

export default Workspace;
