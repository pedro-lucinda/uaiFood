import { BrowserRouter, Switch, Route } from 'react-router-dom';
//components
import Home from '../pages/Home';
import SearchResultsPage from '../pages/SearchResultsPage';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Results/:lat/:lon/:id" exact component={SearchResultsPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
