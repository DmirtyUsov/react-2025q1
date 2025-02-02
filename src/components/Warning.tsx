import React from 'react';

export default class Warning extends React.Component<{
  title?: string;
  message?: string;
}> {
  render(): React.ReactNode {
    return (
      <div
        className="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
        role="alert"
      >
        <p className="font-bold">{this.props.title || `Be Warned`}</p>
        <p>{this.props.message || `Something wrong.`}</p>
      </div>
    );
  }
}
