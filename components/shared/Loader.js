const SpinningLoader = ({ variant = 'normal' }) => (
  <div className={`spinner-${variant}`}>
    <div className="cube1"></div>
    <div className="cube2"></div>
  </div>
);
export default SpinningLoader;
