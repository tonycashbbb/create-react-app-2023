import {ReactElement} from 'react';
import {AppHeader} from '@app/ui/app-header';
import {AppFooter} from '@app/ui/app-footer';

type Props = {
	RouteElement: ReactElement;
};

export function AppLayout({RouteElement}: Props) {
	return (
		<div className='flex h-screen flex-col'>
			<AppHeader />

			<div className='flex-1 bg-violet-400'>{RouteElement}</div>

			<AppFooter />
		</div>
	);
}
