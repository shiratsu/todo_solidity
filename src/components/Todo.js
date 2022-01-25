import React from 'react';

// react-bootstarpのライブラリを使用する
import { ListGroup } from 'react-bootstrap';

// TodoInputコンポーネントからpropsを受け取り、Todo関数に渡す
function Todo(props) {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                {props.title}
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Todo;