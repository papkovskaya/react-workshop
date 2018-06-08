import React from "react";

export class List extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <ul>
          {
            this.props.items.map((value) => (
              <li key={value}>
                <span>{value}</span>
                <button onClick={() => this.props.onClick(value)} className="btn btnRemove">X</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
