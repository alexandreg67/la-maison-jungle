import PropTypes from 'prop-types';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

export default function CareScale({ scaleValue, careType }) {

    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }

    const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

    return (
        <div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
    )
}

CareScale.propTypes = {
    scaleValue: PropTypes.number.isRequired,
    careType: PropTypes.string.isRequired,
};
