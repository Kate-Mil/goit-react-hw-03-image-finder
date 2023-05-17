import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ data }) {
  return (
    <Gallery>
      {data.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} url={webformatURL} alt={tags} />
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
