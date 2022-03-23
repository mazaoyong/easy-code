import React from 'react';
import './App.scss';
import HeaderBlock from './blocks/header';
import AsideBlock from './blocks/aside';
import EditorBlock from './blocks/editor';

const App: React.FC = () => {

  return (
    <div className="App">
      <HeaderBlock></HeaderBlock>
      <div className="app-editor">
        <AsideBlock></AsideBlock>
        <EditorBlock></EditorBlock>
      </div>
    </div>
  );
}

export default App;
