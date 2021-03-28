import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Image} from './Image';

interface StoreObj {
  name: string;
  date: string;
}

export const ImageFrame: React.FC<{
	image: string;
	store: StoreObj;
	num: number;
}> = ({image, store, num}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 2.5,
			damping: 1000,
		},
	});
	
	const opacity = interpolate(progress, [0, 1], [0, 1]);
	return (
		<AbsoluteFill style={{ opacity }}>
			<AbsoluteFill style={{width, height}}>
				<Image image={image} store={store} num={num} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
