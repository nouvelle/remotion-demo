import {AbsoluteFill, Img} from 'remotion';
import '../font.css'

interface StoreObj {
  name: string;
  date: string;
}

export const Image: React.FC<{
	image: string;
	store: StoreObj;
	num: number;
}> = ({image, store, num}) => {
	return (
		<AbsoluteFill style={{ overflow: 'hidden' }}>
			{(num === 0) 
				? 
					<>
						<Img
							src={image}
							style={{
							position: 'absolute',
							width: '90%',
							top: '-10%',
							left: '5%',
							margin: '0 auto'
							}}
					/>
						<div
							style={{
							fontFamily: "'Carter One', cursive, 'RocknRoll One', sans-serif",
							fontSize: 100,
							textAlign: 'center',
							position: 'absolute',
							top: 80,
							width: '100%',
							color: '#fff',
							}}
						>{store.name}
						</div>
					</>
				: 
					<>
						<Img
							src={image}
							style={{
							position: 'absolute',
							width: '90%',
							left: '5%',
							margin: '0 auto'
							}}
						/>
						<div
							style={{
							fontFamily: "'Carter One', cursive, 'RocknRoll One', sans-serif",
							fontSize: 100,
							textAlign: 'center',
							position: 'absolute',
							bottom: 80,
							width: '100%',
							color: '#fff',
							}}
						>{store.name}
						</div>
					</>}
		</AbsoluteFill>
	);
};
