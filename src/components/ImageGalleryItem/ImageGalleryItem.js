import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, text }) {
  return (
    <GalleryItem>
      <GalleryItemImage src={url} alt={text} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
