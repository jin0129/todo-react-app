import React from 'react';
import Todo from './Todo';
import {Paper, List}from "@material-ui/core";
import './App.css';

class App extends React.Component {
    constructor(props) { //�Ű����� props ������
        super(props); // �Ű����� pros �ʱ�ȭ
        this.state ={ // item �� item.id, item.title, item.done �Ű����� �̸��� �� �Ҵ�
            items: [
                { id: 0, title: "Todo 1 ", done: true },
                { id: 1, title: "Todo 2 ", done: false },
            ],
        };
    } render() {
        // todoItems�� this.state.items.length �� 0���� ũ�ٸ� true �̹Ƿ� && �ڿ� ���� �Ѱ��ش�.
        // totoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; �̷��� �ص� ���� ����̴�. ���Ǽ��ù� ? ternary operator
            var todoItems =this.state.items.length >0 &&(
                <Paper style={{margin:16}}>
                    <List>
                    {this.state.items.map((item,idx)=>(
                    <Todo item={item} key={item.id}/>
                    ))}
                    </List>
                </Paper>
        );

        // ������ ������Ʈ JSX�� �����Ѵ�. 
        return <div className="App">{todoItems}</div>;
    }
}
export default App;