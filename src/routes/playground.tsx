import { createFileRoute } from '@tanstack/react-router';

import { Playground } from '../pages/playground/Playground';

const PlaygroundPage = () => (
  <Playground />
);

export const Route = createFileRoute('/playground')({
  component: PlaygroundPage,
});
