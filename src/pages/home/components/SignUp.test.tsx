import { test, expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';

import { render, screen } from '@test';

import { SignUp } from './SignUp';

expect.extend(matchers);

test('Reserve appointment', async () => {
  render(<SignUp />);

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});
