import { cleanup, render, screen } from '@testing-library/react';
import HomeComponent from '../src/app/ui/home';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('HomeComponent should render', () => {
    render(
        <HomeComponent />
    );
    const welcomeText = screen.getByText(/Welcome Home/i)
    expect(welcomeText).toBeInTheDocument();
});
