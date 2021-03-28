import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {ImageFrame} from './StarbucksPark/ImageFrame';
import {stores} from './store.json';

export const StarbucksPark: React.FC<{sources: string[]}> = ({sources}) => {
	const images = sources.map(i => require('./' + i));
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	// videoConfig: Composition で渡した値がobjectで取得できる
	// durationInFrames: 150
	// fps: 30
	// height: 1080
	// width: 1920

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 0],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 15;

	return (
		<AbsoluteFill>
			{images.map((image, i) => {
				return (
					<Sequence key={i} durationInFrames={Infinity} from={30 * i}>
						<ImageFrame image={image} store={stores[i]} num={i}/>
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
