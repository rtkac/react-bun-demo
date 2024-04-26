import { test, expect } from 'bun:test';

import { render, screen } from '@test';

import { SignUp } from './SignUp';

test('Reserve appointment', async () => {
  render(<SignUp />);

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});
