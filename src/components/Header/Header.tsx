import React from 'react';
import { Button, Modal } from 'antd';
import { 
  DeleteOutlined, 
  EditOutlined, 
  FileAddOutlined, 
  ExclamationCircleOutlined 
} from "@ant-design/icons";
import SearchBox from '../SearchBox/SearchBox';
import { Note } from '../../types/types';
import "./Header.css";

const { confirm } = Modal;

interface Props {
  setCreateNoteModal(e: boolean): void;
  deleteNote(): void;
  currentNote: Note | undefined;
  editMode: {
    status: boolean;
    setStatus(e: boolean): void;
  };
  searchQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

const Header: React.FC<Props> = ({
  setCreateNoteModal, 
  editMode, 
  deleteNote, 
  searchQuery, 
  currentNote
}) => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this note?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteNote();
      }
    });
  };

  return (
    <div className="header">
      <SearchBox
        searchQuery={{
          query: searchQuery.query,
          setQuery: searchQuery.setQuery
        }}
      />
      <Button 
        type="primary" 
        size="large" 
        icon={<FileAddOutlined />}
        onClick={() => setCreateNoteModal(true)}
      >Create a note</Button>
      {currentNote && (
        <>
          <Button 
            type="primary" 
            size="large" 
            icon={<EditOutlined />} 
            onClick={() => editMode.setStatus(!editMode.status)}
          >Edit</Button>
          <Button 
            type="primary" 
            size="large" 
            danger 
            icon={<DeleteOutlined />}
            onClick={showDeleteConfirm}
          >Delete</Button>
        </>
      )}
    </div>
  )
}

export default Header;
