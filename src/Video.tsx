import {Composition} from 'remotion';
import {StarbucksPark} from './StarbucksPark';
import {Logo} from './StarbucksPark/Logo';
import {Subtitle} from './StarbucksPark/Subtitle';
import {Coffee} from './StarbucksPark/Coffee';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="StarbucksPark"
				component={StarbucksPark}
				durationInFrames={6 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sources: [
						'img/top.jpg',
						'img/1_ueno.jpg',
						'img/2_niko.jpg',
						'img/3_gyoen.jpg',
						'img/4_shinjuku.jpg',
						'img/5_shibuya.jpg',
					],
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={7 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={3 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Coffee"
				component={Coffee}
				durationInFrames={5 * 20}
				fps={20}
				width={1920}
				height={1080}
			/>
		</>
	);
};
