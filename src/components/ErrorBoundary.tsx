import React, { ErrorInfo } from 'react';
import Warning from './Warning';

type Props = {
  children?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Uncaught error', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <Warning message="Something wrong. See console for details." />;
    }

    return this.props.children;
  }
}
