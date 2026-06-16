import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("App render error:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-zinc-950 p-8 text-white">
          <h1 className="font-bebas text-4xl text-orange-400">
            Something went wrong
          </h1>
          <p className="mt-4 font-mono text-sm text-zinc-300">
            {this.state.error.message}
          </p>
          <pre className="mt-6 overflow-auto rounded-lg bg-black/50 p-4 text-xs text-zinc-400">
            {this.state.error.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
