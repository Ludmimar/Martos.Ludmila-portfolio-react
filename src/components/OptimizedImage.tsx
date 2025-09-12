interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  sizes,
  priority = false
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding={decoding}
      className={className}
      style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
    />
  );
};

export default OptimizedImage;