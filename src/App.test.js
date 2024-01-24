import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  expect(screen.getByTestId('app-component')).toBeInTheDocument();
});

jest.mock('../assets/imgs/bannerImg.avif', () => '../assets/imgs/bannerImg.avif');
jest.mock('../assets/imgs/logoImg.avif', () => '../assets/imgs/logoImg.avif');

