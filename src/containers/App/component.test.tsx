import React from 'react';
import { render } from '@testing-library/react';
import App from './component';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const promptRequestElement = getByText(/Send prompt ideas/i);
  expect(promptRequestElement).toBeInTheDocument();
});
