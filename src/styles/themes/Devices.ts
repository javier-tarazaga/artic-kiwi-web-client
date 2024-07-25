const size = {
  mobile: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1150px',
  laptopL: '1440px',
  desktop: '1920px',
};

const devices = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.laptopL})`,
};

export default devices;
