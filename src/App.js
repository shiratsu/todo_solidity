import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

// TodoInputコンポーネントを読み込む
import TodoInput from './components/TodoInput.js'; //ここを追加

class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
          </Navbar>
          
          {/* TodoInputコンポーネントの呼び出し */}
          <TodoInput />
        </Container>
      </div>
    );
  }
}

export default App;