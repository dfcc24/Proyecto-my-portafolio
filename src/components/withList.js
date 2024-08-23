import React from 'react';

const withList = (WrappedComponent, data) => {
  return (props) => (
    <div>
      {data.map(item => (
        <WrappedComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default withList;
