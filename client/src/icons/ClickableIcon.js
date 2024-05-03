function ClickableIcon({ width = '14px', height = '16px', fill = '#67A9ED' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59961 12.7998C8.11961 12.7998 7.79961 13.1198 7.79961 13.5998C7.79961 14.0798 7.47961 14.3998 6.99961 14.3998H2.99961C2.51961 14.3998 2.19961 14.0798 2.19961 13.5998V7.1998C2.19961 6.7198 2.51961 6.3998 2.99961 6.3998H6.99961C7.47961 6.3998 7.79961 6.7198 7.79961 7.1998C7.79961 7.6798 8.11961 7.9998 8.59961 7.9998C9.07961 7.9998 9.39961 7.6798 9.39961 7.1998C9.39961 5.8398 8.35961 4.7998 6.99961 4.7998H2.99961C1.63961 4.7998 0.599609 5.8398 0.599609 7.1998V13.5998C0.599609 14.9598 1.63961 15.9998 2.99961 15.9998H6.99961C8.35961 15.9998 9.39961 14.9598 9.39961 13.5998C9.39961 13.1198 9.07961 12.7998 8.59961 12.7998Z"
        fill={fill}
      />
      <path
        d="M10.9996 0H6.99961C5.63961 0 4.59961 1.04 4.59961 2.4C4.59961 2.88 4.91961 3.2 5.39961 3.2C5.87961 3.2 6.19961 2.88 6.19961 2.4C6.19961 1.92 6.51961 1.6 6.99961 1.6H10.9996C11.4796 1.6 11.7996 1.92 11.7996 2.4V8.8C11.7996 9.28 11.4796 9.6 10.9996 9.6H6.99961C6.51961 9.6 6.19961 9.28 6.19961 8.8C6.19961 8.32 5.87961 8 5.39961 8C4.91961 8 4.59961 8.32 4.59961 8.8C4.59961 10.16 5.63961 11.2 6.99961 11.2H10.9996C12.3596 11.2 13.3996 10.16 13.3996 8.8V2.4C13.3996 1.04 12.3596 0 10.9996 0Z"
        fill={fill}
      />
    </svg>
  );
}

export default ClickableIcon;