import { createFileRoute } from '@tanstack/react-router'

import { Home } from '../pages/home/Home'

const Index = () => (
  <Home />
);

export const Route = createFileRoute('/')({
  component: Index,
});
