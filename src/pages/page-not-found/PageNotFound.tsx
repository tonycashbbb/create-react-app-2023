import {Link} from 'react-router-dom';
import {APP_ROUTER, APP_TEXT} from '@shared/lib/constants';

export function PageNotFound() {
	return (
		<div className='bg-red-300'>
			<h1>{APP_TEXT.pageNotFound}</h1>
			<div>
				<Link to={APP_ROUTER.root}>{APP_TEXT.goBackHome}</Link>
			</div>
		</div>
	);
}
