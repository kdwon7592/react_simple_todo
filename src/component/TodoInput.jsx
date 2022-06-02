import React from "react";
import { Component } from "react";

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        // bind 함수를 쓰는 것 대신 arrow function 사용으로 이벤트를 핸들링 할 수 있다
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    };

    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        return (
            <>
                <div className="TodoInput">
                    <input placeholder="새로운 Todo를 입력해주세요" value={this.state.inputValue} onChange={(e) => this.handleChange(e)} />
                    <button onClick={(e) => { this.handleClick(e) }}>등록</button>
                </div>
            </>
        )
    }
}

export default TodoInput;