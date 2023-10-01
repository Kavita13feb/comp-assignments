import React from 'react';

const ImageComponent = () => {
  // Given details
  const imageDetails = {
    aspectRatio: 1.779,
    basePath: 'images/img-3c2f4551-5465-43be-a34e-7d598beab8c3',
    domain: 'https://cimg.acharyaprashant.org',
    id: 'img-3c2f4551-5465-43be-a34e-7d598beab8c3',
    key: 'image.jpg',
  };

  // Construct the full image URL
  const imageUrl = `${imageDetails.domain}/${imageDetails.basePath}/10/${imageDetails.key}`;
  https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg
  return (
    <div>
      {/* Display the image */}
      <img src={imageUrl} alt="Image Alt Text" />
    </div>
  );
};

export default ImageComponent;
