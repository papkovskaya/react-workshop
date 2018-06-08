import React from "react";
import {Title} from "./Title";
import {SearchBox} from "./SearchBox";
import {List} from "./List";

export class ToDoList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: ['hello', 'world'],
      text: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onInputPress = this.onInputPress.bind(this);
    this.onRemoteButtonClick = this.onRemoteButtonClick.bind(this);
  }

  onChangeText(e) {
    const text = e.target.value;
    this.setState({text});
  }

  _onListUpdate() {
    const { text } = this.state;
    const isExisting = this.state.items.includes(text);
    if (isExisting) return;
    const items = [...this.state.items, text];
    this.setState({ items, text: '' });
  }

  onAddButtonClick() {
    this._onListUpdate();
  }

  onInputPress(e) {
    const {charCode} = e;

    if (charCode !== 13) return;
    this._onListUpdate();
  }

  onRemoteButtonClick(value) {
    const items = this.state.items.filter(item => item !== value);

    this.setState({items});
  }

  render() {
    return (
      <div className="to-do-list">
        <Title />
        <SearchBox
          onKeyPress = {this.onInputPress}
          onClick = {this.onAddButtonClick}
          onChange={this.onChangeText}
          text={this.state.text} />
        <List
        onClick={this.onRemoteButtonClick}
        items={this.state.items} />
      </div>
    );
  }
}
