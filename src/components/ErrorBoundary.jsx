import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Algo salió mal</h1>
            <p className="text-gray-400 mb-8">Ocurrió un error inesperado.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent-500 hover:bg-accent-400 text-navy-900 font-semibold rounded-xl transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
