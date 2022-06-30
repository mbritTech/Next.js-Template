/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages'

describe('HomePage', () => {
  it('Should see Home text', async () => {
    render(<Home />)
    const homeText = await screen.findByText(/Home/i)
    expect(homeText).toBeInTheDocument()
  })
})