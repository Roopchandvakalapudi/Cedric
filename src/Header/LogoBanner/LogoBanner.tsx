import './LogoBanner.css';

const LogoBanner = () => {
  const logoUrl =
    'https://www.centific.com/wp-content/themes/centific/assets/images/logo.svg';

  return (
    <div className='logo-banner'>
      <img src={logoUrl} alt='Company Logo' className='logo' />
    </div>
  );
};

export default LogoBanner;
