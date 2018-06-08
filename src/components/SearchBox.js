import React from "react";

export class SearchBox extends React.PureComponent {
  render() {
    return (
      <div className="search-box">
        <input
        {...this.props}
        onKeyPress={this.props.onKeyPress}
        onChange={this.props.onChange}
        type="text"
        placeholder="input Text"
        value={this.props.text}/>
        <button onClick={this.props.onClick} className="btn btnAdd">Add</button>
      </div>
    );
  }
}
