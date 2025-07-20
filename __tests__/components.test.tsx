import { render, screen } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'

// Simple test component
const TestComponent = () => {
  return <div>Hello, World!</div>
}

describe('Component Testing', () => {
  it('should render a component correctly', () => {
    render(<TestComponent />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('should handle basic assertions', () => {
    const element = <div data-testid="test-element">Test</div>
    render(element)
    expect(screen.getByTestId('test-element')).toBeInTheDocument()
  })
}) 