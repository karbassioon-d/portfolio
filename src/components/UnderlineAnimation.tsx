const UnderlineAnimation = () => (
  <style>
    {`
      @keyframes underline-from-left {
        0% {
          width: 0;
          left: 0;
        }
        100% {
          width: 100%;
          left: 0;
        }
      }
    `}
  </style>
);

export default UnderlineAnimation;
