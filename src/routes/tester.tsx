import { createFileRoute } from '@tanstack/react-router';

import { Test } from '../pages/test/Test';

const Tester = () => (
  <Test />
);

export const Route = createFileRoute('/tester')({
  component: Tester,
});
