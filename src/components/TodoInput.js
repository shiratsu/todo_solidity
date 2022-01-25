import React, { Component } from 'react';

// react-bootstarpのライブラリを使用する
import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

// TodoListコンポーネントを読み込む
import TodoList from './TodoList'; // ここを追加

// TodoInputコンポーネントを定義する
class TodoInput extends Component {

    // コンポーネントの状態を初期化する
    constructor(props) {
        super(props);
        this.state = {
            task: [],
        }
    }

    // Todoを追加する関数
    onAddTodo(event) {
        event.preventDefault();
        this.state.task.push({title: event.target.title.value});
        this.setState(this.state.task);
        event.target.title.value = " ";
        console.log(this.state.task);
    }

    render() {
        return (
            <div>
                <Card className="mt-3 mb-3">
                    <Card.Body>
                        <Form onSubmit={this.onAddTodo.bind(this)}>
                            <InputGroup>
                                <FormControl name="title" placeholder="Todoを入力してください" />
                                <Button type="submit" variant="success">Add</Button>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>
                {/* TodoListコンポーネントの呼び出し */}
                <TodoList task={this.state.task}/>　{/* ここを追加 */}
            </div>
        );
    }
}

export default TodoInput;
