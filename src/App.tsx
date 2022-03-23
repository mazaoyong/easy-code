import React, { createContext } from 'react';
import './App.scss';
import HeaderBlock from './blocks/header';
import AsideBlock from './blocks/aside';
import EditorBlock from './blocks/editor';
import { makeAutoObservable } from "mobx"
class Store {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
}
const entity = new Store
export const StoreContext = createContext<Store>(entity);

const App: React.FC = () => {

  return (
    <StoreContext.Provider value={entity}>
      <div className="App">
        <HeaderBlock></HeaderBlock>
        <div className="app-editor">
          <AsideBlock></AsideBlock>
          <EditorBlock></EditorBlock>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
