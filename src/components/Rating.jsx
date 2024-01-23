import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarBorder } from 'react-icons/md';

export default function Rating({ rating }) {
  const { rate } = rating;
  const { count } = rating;
  const stars = [];

  for (let i = 0; i < Math.floor(rate); i += 1) {
    stars.push(<MdOutlineStar key={i} color='orange' />);
  }

  if (rate % 1 > 0.5) {
    stars.push(<MdOutlineStarHalf key='half' color='orange' />);
  }

  const { length } = stars;
  if (stars.length - 5 < 0) {
    for (let j = 0; j < (5 - length); j += 1) {
      stars.push(<MdOutlineStarBorder key={`empty${j}`} color='orange' />);
    }
  }

  return (
    <div>
      <div className='flex items-center'>
        {stars}
        <span className='ml-1'>
          &#40;
          {count}
          {' '}
          &#41;
        </span>

      </div>

    </div>
  );
}
