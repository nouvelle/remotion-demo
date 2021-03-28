import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_3} from './config';

export const Coffee: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 80,
				width: '100%',
				opacity,
				color: COLOR_3,
			}}
		>
			Hello! This is today&apos;s coffee.
		</div>
	);
};
