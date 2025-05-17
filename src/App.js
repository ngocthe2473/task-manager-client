import React from 'react';
import UserList from './components/UserList';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import CommentSection from './components/CommentSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <UserList />
        <ProjectList />
        <TaskList />
        <CommentSection taskId="123" /> {/* Example taskId */}
      </main>
    </div>
  );
}

export default App;
