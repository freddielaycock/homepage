import type { FC } from "react";

import { TestComponent } from "../../components/test-component/TestComponent";

export const Home: FC = () => (
	<div data-test-id="home-page">
		<TestComponent text="Please check back for further updates." />
	</div>
);
