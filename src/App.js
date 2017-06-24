import React, { Component } from 'react';
//Import responsive gallery component
import ResponsiveGallery from './components/ResponsiveGallery';

// Define array of images with thumbnails
const DEFAULT_IMAGES = [{
  src: '/images/gallery-1.jpg',
  thumbnail: '/images/gallery-1.jpg',
  caption: 'Image 1',
},{
  src: '/images/gallery-2.jpg',
  thumbnail: '/images/gallery-2.jpg',
  caption: 'Image 2',
},{
  src: '/images/gallery-3.jpg',
  thumbnail: '/images/gallery-3.jpg',
  caption: 'Image 3',
},{
  src: '/images/gallery-4.jpg',
  thumbnail: '/images/gallery-4.jpg',
  caption: 'Image 4',
},{
  src: '/images/gallery-5.jpg',
  thumbnail: '/images/gallery-5.jpg',
  caption: 'Image 5',
},{
  src: '/images/gallery-6.jpg',
  thumbnail: '/images/gallery-6.jpg',
  caption: 'Image 6',
}];

export default class App extends Component {

  render () {
		return (
			<ResponsiveGallery images={DEFAULT_IMAGES.map(({ src, thumbnail, caption }) => ({
        src,
        thumbnail,
        caption,
      }))} />
    )
  }
}
