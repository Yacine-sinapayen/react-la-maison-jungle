import logo from '../assets/logo.png';
import Recommendation from './Recommendation';
import '../styles/Banner.css';

function Banner() {
	const title = 'La maison jungle'
	return (
		<div className='lmj-banner'>
			<img src={logo} alt='La maison jungle' className='lmj-logo' />
			<h1 className='lmj-title'>{title}</h1>
            <Recommendation />
		</div>
	)
}

export default Banner