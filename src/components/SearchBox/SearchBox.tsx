import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBox.css";

interface Props {
  searchQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  }
}

const SearchBox: React.FC<Props> = ({searchQuery}) => {
  return (
    <Input 
      value={searchQuery.query}
      onChange={e => searchQuery.setQuery(e.target.value)}
      className="search-box" 
      size="large" 
      placeholder="Search note..." 
      prefix={<SearchOutlined />} 
    />
  )
}

export default SearchBox;
