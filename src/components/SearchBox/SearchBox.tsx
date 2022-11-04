import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBox.css";

const SearchBox: React.FC = () => {
  return (
    <Input className='search-box' size="large" placeholder="large size" prefix={<SearchOutlined />} />
  )
}

export default SearchBox;
