import { describe, it, expect } from '@jest/globals'

describe('Basic test setup', () => {
  it('should work correctly', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle strings', () => {
    expect('hello').toBe('hello')
  })
}) 