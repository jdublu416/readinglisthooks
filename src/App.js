import React from 'react';
import './App.css';

//contexts
import BookContextProvider from './contexts/BookContext';

//components
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
