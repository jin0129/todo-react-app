import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props); this.state = { item: props.item }; // �Ű����� item �� ����/���� item�� ����
    } render() {
        return (
            <div className="Todo">
                <input
                    type="checkbox"
                    id={this.state.item.id} // item.id ������ �������϶� �ǹ�(JPX)
                    name={this.state.item.id} checked={this.state.item.done} // item.done ������ �������϶� �ǹ�
                />
                <label for={this.state.item.id}>{this.state.item.title}</label>
            </div>
        );
    }
}
export default Todo