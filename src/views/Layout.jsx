import { Outlet } from 'react-router-dom';
import { useAuth, SignInButton, SignOutButton } from '../api/useAuth';
import { auth } from '../api/config';

import './Layout.css';

/**
 * TODO: The links defined in this file don't work!
 *
 * Instead of anchor element, they should use a component
 * from `react-router-dom` to navigate to the routes
 * defined in `App.jsx`.
 */

export function Layout() {
	const { user } = useAuth();
	return (
		<>
			<div className="Layout">
				<header className="Layout-header">
					<h1>Smart shopping list</h1>
					{!!user ? (
						<div>
							<SignOutButton />
						</div>
					) : (
						<div>
							{' '}
							<SignInButton />
						</div>
					)}
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<div className="Nav-container">
						<a href="#" className="Nav-link">
							Home
						</a>
						<a href="#" className="Nav-link">
							List
						</a>
						<a href="#" className="Nav-link">
							Add Item
						</a>
					</div>
				</nav>
			</div>
		</>
	);
}
