import {ElementType, lazy, Suspense, useState} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {AppLayout} from '@app/ui/app-layout';
import {AuthGuard} from '@entities/session';
import {APP_ROUTER} from '@shared/lib/constants';

const LoginPage = Loadable(lazy(() => import('@pages/login')));
const RegisterPage = Loadable(lazy(() => import('@pages/register')));
const PageNotFound = Loadable(lazy(() => import('@pages/page-not-found')));

export function RouterProvider() {
	return useRoutes([
		{
			element: <AppLayout RouteElement={<Outlet />} />,
			children: [
				{
					path: APP_ROUTER.root,
					element: <MoneyMaker />,
				},
				{
					path: APP_ROUTER.login,
					element: (
						<AuthGuard>
							<LoginPage />
						</AuthGuard>
					),
				},
				{
					path: APP_ROUTER.register,
					element: (
						<AuthGuard>
							<RegisterPage />
						</AuthGuard>
					),
				},
			],
		},
		{path: APP_ROUTER.pageNotFound, element: <PageNotFound />},
		{path: '*', element: <Navigate to={APP_ROUTER.pageNotFound} replace />},
	]);
}

function MoneyMaker() {
	const [count, setCount] = useState(0);

	function handleIncrement() {
		setCount(count + 1);
	}

	return (
		<div className='py-10'>
			<h1 className='text-center text-5xl font-bold text-green-300'>Wallet 💵</h1>

			<div className='mt-20 text-center'>
				<div className='text-2xl font-bold text-white'>izi Money - {count}$</div>

				<button
					className='mt-8 rounded-2xl border-2 bg-amber-50 px-4 py-2 font-medium outline-none'
					onClick={handleIncrement}
				>
					Increase ↑
				</button>
			</div>
		</div>
	);
}

function Loadable(Page: ElementType) {
	return (props: any) => (
		<Suspense fallback={<div>loading...</div>}>
			<Page {...props} />
		</Suspense>
	);
}
