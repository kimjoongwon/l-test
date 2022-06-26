/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Person } from './Person';

test('renders person', () => {
  const { getByText } = render(<Person />);
  const linkElement = getByText(/person/i);
  expect(linkElement).toBeDefined();
});
