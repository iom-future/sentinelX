import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 px-4 bg-[#101622] border border-[#243044] rounded-xl text-center text-[#929EAE] max-w-2xl mx-auto my-8">
          <h3 className="text-lg font-heading font-semibold text-[#F4F7FC]">
            Component Temporarily Unavailable
          </h3>
          <p className="text-xs font-mono mt-2">
            The security module encountered a rendering anomaly and was safely isolated.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

