import React from 'react';
import Todo from './Todo';
import './App.css';
class App extends React.Component {
    constructor(props) { //�Ű����� props ������
        super(props); // �Ű����� pros �ʱ�ȭ
        this.state = { // item �� item.id, item.title, item.done �Ű����� �̸��� �� �Ҵ�
            items: [{ id: 0, title: "Todo 1 ", done: false },
                { id: 1, title: "Todo 2 ", done: false },
            ],
        };
    } render() { // �ڹٽ�ũ��Ʈ�� �����ϴ� map �Լ��� �̿��ؼ� �迭�� �ݺ��� <Todo /> ������Ʈ�� ���� �� �����Ѵ�.
        var todoItems = this.state.items.map((item, idx) => (
        <Todo item={item} key={item.id} />
    ));
        // ������ ������Ʈ JSX�� �����Ѵ�. 
        return <div className="App">{todoItems}</div>;
    }
    }
export default App;