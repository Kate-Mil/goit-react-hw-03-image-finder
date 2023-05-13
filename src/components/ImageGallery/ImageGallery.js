import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ data, text }) {
  console.log(data);
  return (
    <Gallery>
      {data.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} url={webformatURL} text={text} />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  searchTerm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
