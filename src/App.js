import { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';

import Page1Demo from './demos/Page1';
import Page2Demo from './demos/Page2';
import Page3Demo from './demos/Page3';
import Page4Demo from './demos/Page4';
import Page5Demo from './demos/Page5';
import Page6Demo from './demos/Page6';
import Page7Demo from './demos/Page7';

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentDemo, setCurrentDemo] = useState(1);

	const [isDemo, setIsDemo] = useState(true);

	const CurrentComponent = () => {
		switch (currentPage) {
			case 1:
				return (
					<Page1
					// text="Hello world!"
					/>
				);
			case 2:
				return <Page2 />;
			case 3:
				return <Page3 />;
			case 4:
				return <Page4 />;
			case 5:
				return <Page5 />;
			case 6:
				return <Page6 />;
			case 7:
				return <Page7 />;
			default:
				return <Page1 />;
		}
	};

	const CurrentDemo = () => {
		switch (currentDemo) {
			case 1:
				return (
					<Page1Demo
					// text="hello world"
					/>
				);
			case 2:
				return <Page2Demo />;
			case 3:
				return <Page3Demo />;
			case 4:
				return <Page4Demo />;
			case 5:
				return <Page5Demo />;
			case 6:
				return <Page6Demo />;
			case 7:
				return <Page7Demo />;
			default:
				return <Page1Demo />;
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<button onClick={() => setIsDemo(prev => !prev)}>
					isDemo: {JSON.stringify(isDemo)}
				</button>

				<button
					onClick={() => {
						if (isDemo) {
							setCurrentDemo(prev =>
								prev > 1 ? prev - 1 : prev
							);
						} else {
							setCurrentPage(prev =>
								prev > 1 ? prev - 1 : prev
							);
						}
					}}
				>
					Previous Page
				</button>
				<p>Current Page: {isDemo ? currentDemo : currentPage}</p>
				<button
					onClick={() => {
						console.log('setting~');
						if (isDemo) {
							setCurrentDemo(prev =>
								prev < 7 ? prev + 1 : prev
							);
						} else {
							setCurrentPage(prev =>
								prev < 7 ? prev + 1 : prev
							);
						}
					}}
				>
					Next Page
				</button>
			</header>

			{isDemo ? <CurrentDemo /> : <CurrentComponent />}
		</div>
	);
}

export default App;
