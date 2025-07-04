'use client';

import React from 'react';
import { ErrorBoundaryState, ErrorProps } from '@/types';

class ErrorBoundary extends React.Component<
    React.PropsWithChildren<{}>,
    ErrorBoundaryState
> {
    constructor(props: React.PropsWithChildren<{}>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Portfolio Error Boundary:', error, errorInfo);

        // Vous pouvez envoyer l'erreur vers un service de monitoring ici
        // exemple: Sentry, LogRocket, etc.
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className="mb-4">
                            <svg
                                className="mx-auto h-16 w-16 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-2 font-arboria">
                            Oops ! Une erreur s'est produite
                        </h2>

                        <p className="text-gray-600 mb-6 font-objektiv">
                            Une erreur inattendue s'est produite. Veuillez rafraîchir la page ou réessayer plus tard.
                        </p>

                        <div className="space-y-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-objektiv"
                            >
                                Rafraîchir la page
                            </button>

                            <button
                                onClick={() => this.setState({ hasError: false })}
                                className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-objektiv"
                            >
                                Réessayer
                            </button>
                        </div>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-6 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                                    Détails de l'erreur (dev only)
                                </summary>
                                <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                  {this.state.error.message}
                                    {'\n'}
                                    {this.state.error.stack}
                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;