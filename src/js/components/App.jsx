import React from 'react';

export const App = (props) => { // eslint-disable-line
  const { children } = props;
  return (
    <div className="content">
      {children}
    </div>
  );
};
