import React from 'react';
import Todo from './Todo';
import './App.css';
class App extends React.Component {
    constructor(props) { //�Ű����� props ������
        super(props); // �Ű����� pros �ʱ�ȭ
        this.state = { // item �� item.id, item.title, item.done �Ű����� �̸��� �� �Ҵ�
            item: { id: 0, title: "Hello World 1 ", done: true },
        };
    } render() {
        return ( // �Ű����� item �� ������/���� ����
            <div className="App">
                <Todo item={this.state.item} />
            </div>
        );
    }
}
export default App;