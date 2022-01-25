import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

// TodoInputコンポーネントを読み込む
import TodoInput from './components/TodoInput.js'; //ここを追加

// Todo_ABI.js & web3.jsファイルの読み込み
import TodoContract from './components/Todo_ABI'; // ここを追加
import web3 from './components/web3'; // ここを追加

class App extends Component {

  // ここから追加
  // レンダリング前に呼び出される
  async componentWillMount(){
  
    // 自身のウォレットアドレスを取得する
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
  }

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