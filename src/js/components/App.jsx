import React from 'react';

export default class App extends React.Component {
  render() {
    const { children } = props;
    return (
      <div className="content">
        {children}
      </div>
    );
  }
}
