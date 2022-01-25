
import React, {Component} from 'react';

// react-bootstarpのライブラリを使用する
import { Card } from 'react-bootstrap';

// Todoコンポーネントを読み込む
import Todo from './Todo'

class TodoList extends Component {

    // TodoInputコンポーネントから受け取ったpropsの値を.mapで展開する
    render() {
        const list = this.props.task.map((todo, i) => {
        
            // .mapで展開された数だけ、Todoコンポーネントを呼び出す
            return <Todo {...todo} key={i}/>;
        });

        return (
            <div>
                <Card>
                    <Card.Header>Todo List</Card.Header>
                    {list}
                </Card>
            </div>
        );
    }
}

export default TodoList;
