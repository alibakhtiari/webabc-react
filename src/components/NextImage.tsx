import React, { memo } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface NextImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty' | `data:image/${string}`;
  blurDataURL?: string;
}

const NextImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  quality = 85,
  objectFit = 'cover',
  placeholder = 'empty',
  blurDataURL,
  ...props
}: NextImageProps) => {
  // Convert objectFit to Next.js style (object-fit CSS property)
  const style: React.CSSProperties = {
    objectFit: objectFit,
    ...(props.style || {}),
  };

  // Add image parameters for optimization if using external URLs
  const optimizedSrc = src.startsWith('/api/') || (!src.startsWith('http') && !src.startsWith('/'))
    ? src
    : src;

  return (
    <Image
      {...props}
      src={optimizedSrc}
      alt={alt}
      width={width || 800} // Default width if not provided
      height={height || 600} // Default height if not provided (calculates aspect ratio)
      priority={priority}
      quality={quality}
      className={cn("transition-opacity duration-300", className)}
      style={style}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      // Next.js Image automatically handles:
      // - Lazy loading (unless priority is true)
      // - Responsive images
      // - Modern format conversion
      // - Automatic sizing
    />
  );
};

// Create a wrapper component that matches the OptimizedImage interface for easier migration
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  lazyBoundary?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  placeholderColor?: string;
  quality?: number;
}

export const NextOptimizedImage = memo(({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  onLoad,
  onError,
  lazyBoundary,
  objectFit = 'cover',
  sizes = '(max-width: 768px) 100vw, 50vw',
  placeholderColor = 'bg-gray-100',
  quality = 85
}: OptimizedImageProps) => {
  return (
    <div className={cn("overflow-hidden relative", className)} style={{ aspectRatio: width && height ? width / height : undefined }}>
      {/* Placeholder div to maintain aspect ratio */}
      <div className={cn("absolute inset-0 flex items-center justify-center", placeholderColor)}>
        <span className="sr-only">Loading image...</span>
      </div>

      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        objectFit={objectFit}
        className="w-full h-full"
        sizes={sizes}
        onLoad={onLoad}
        onError={(e) => {
          console.error(`Failed to load image: ${src}`, e);
          if (onError) onError();
        }}
        // Next.js Image handles the rest automatically
      />
    </div>
  );
});

NextOptimizedImage.displayName = 'NextOptimizedImage';

// Export both components
export default NextImage;
export { NextOptimizedImage as OptimizedImage };
