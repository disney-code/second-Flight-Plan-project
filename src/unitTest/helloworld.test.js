import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloWorld from '../components/helloworld';

describe('HelloWorld Component', () => {
  test('renders Hello World text', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
