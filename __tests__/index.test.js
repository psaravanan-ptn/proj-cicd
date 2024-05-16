import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const welcomeText = screen.getByText(/Learn about Next.js/i)
    expect(welcomeText).toBeInTheDocument();
  })
})