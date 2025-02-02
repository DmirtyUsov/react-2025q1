import React from 'react';

type State = {
  isEmulateError: boolean;
};
export default class Footer extends React.Component {
  state: Readonly<State> = {
    isEmulateError: false,
  };

  handleClick(): void {
    this.setState((): State => {
      return { isEmulateError: true };
    });
  }
  render(): React.ReactNode {
    if (this.state.isEmulateError) {
      throw new Error('Simulated error.');
    }
    return (
      <footer id="footer" className="mt-4 bg-teal-700 text-xl text-white">
        <div className="mx-auto flex max-w-4xl p-4">
          <button
            onClick={() => {
              this.handleClick();
            }}
            className="w-48 cursor-pointer rounded-xl border border-solid border-slate-900 bg-amber-700 p-3 text-white hover:bg-amber-600 active:bg-amber-500"
          >
            Simulate Error
          </button>
        </div>
      </footer>
    );
  }
}
