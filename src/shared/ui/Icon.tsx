import {ReactElement} from 'react';
import {cn} from '@shared/lib/helpers';
import {BriefcaseIcon} from '@heroicons/react/24/outline';

export const APP_ICON = {
	PORTFOLIO: 'PORTFOLIO',
} as const;

const iconMap = {
	[APP_ICON.PORTFOLIO]: ({className}: {className: string}) => (
		<BriefcaseIcon className={cn(className, 'text-primary-grey h-6 w-6')} />
	),
} as any;

type IconProps = {
	name: string;
	className?: string;
};

export const Icon = ({name, className}: IconProps) => {
	const AppIcon = iconMap[name];

	return <AppIcon {...{className}} />;
};

type IconButtonProps = {
	children: ReactElement;
	handleClick: () => void;
};

export function IconButton({children, handleClick}: IconButtonProps) {
	return (
		<button
			className='bg-secondary-violet flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl'
			onClick={handleClick}
		>
			<div className='h-5 w-5'>{children}</div>
		</button>
	);
}
