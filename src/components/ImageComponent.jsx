// components/ImageComponent.js

import Image from 'next/image'

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <div className="h-64 w-64">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        className="object-cover"
      />
    </div>
  )
}

export default ImageComponent
