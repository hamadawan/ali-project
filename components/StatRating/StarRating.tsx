const StarRating = ({ rating, color, width, height, className }: any) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`${className} flex items-center space-x-px`}>
      {Array.from({ length: fullStars }, (_, index) => (
        <svg
          key={`star-${index}`}
          className={`${color ?? "text-yellow-400"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={width}
          height={height}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className={`${color ?? "text-yellow-400"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={width}
          height={height}
        >
          <path d="M10 2.026L12.428 7.2l5.66.82c1.095.16 1.534 1.423.7 2.147L15.114 12.8l1.445 5.455c.28 1.055-.888 1.909-1.76 1.279L10 15.587l-4.238 3.897c-.87.63-2.04-.225-1.76-1.28L4.886 12.8 1.212 10.168c-.834-.724-.395-1.987.7-2.147l5.66-.82L10 2.026z" />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg
          key={`empty-star-${index}`}
          className="text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={width}
          height={height}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69l3.461.005c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};
export default StarRating;
