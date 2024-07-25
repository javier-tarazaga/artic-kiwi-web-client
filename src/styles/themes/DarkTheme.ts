import { rgba } from 'polished';

const colorPalette = {
  DarkGunmetal: {
    original: '#132730',
    washed: '#788D96',
    accent: '#36C9DD',
  },
  AzureBlue: {
    original: '#5DB9FF',
    washed: '#A8D9FF',
    light: '#4993CC',
    dark: '#254A66',
    accent: '#FFBA00',
  },
  PikaYellow: {
    original: '#FFD83B',
    washed: '#FFECA1',
    light: '#EFC51D',
    dark: '#A38714',
    accent: '#CE5CF9',
  },
  WildCherry: {
    original: '#EA1B7A',
    washed: '#F296C1',
    dark: '#B32768',
  },
  UIstatuses: {
    white: '#FFFFFF',
    black: '#000000',
    lavander: '#D1CCDC',
    caribbeanGreen: '#00D694',
    sunburnt: '#FF414D',
  },
  UserInterface: {
    body: '#0C2731',
    cards: '#0F313D',
    cardsTint: '#0F2D38',
    cardsHighlight: '#24434E',
  },
  TBD: {
    newGreen: '#107C10',
  },
};

const palette = {
  ...colorPalette,

  black: colorPalette.UIstatuses.black,
  white: colorPalette.UIstatuses.white,
  whiteOpacity: rgba(colorPalette.UIstatuses.white, 0.1),
  blackOpacity: rgba(colorPalette.UIstatuses.black, 0.16),
};

const DarkTheme = {
  // EXTERNALS
  twitch: '#6441a5',
  facebook: '#3b5998',
  youtube: '#ff0000',
  discord: '#7289da',
  twitter: '#00acee',
  razerGreen: '#66B933',
  razerBG: palette.black,

  // MAIN
  brand: palette.PikaYellow.original,
  brandAccent: palette.AzureBlue.original,
  brandTertiary: palette.WildCherry.original,
  success: palette.UIstatuses.caribbeanGreen,
  warning: palette.UIstatuses.sunburnt,

  // TYPOGRAPHY
  textBody: palette.white,
  textContrast: palette.DarkGunmetal.original,
  textDescription: palette.DarkGunmetal.washed,
  textMain: palette.PikaYellow.original,
  textMainAccent: palette.AzureBlue.original,
  labelMainText: palette.PikaYellow.washed,
  labelMainAccentText: palette.AzureBlue.washed,
  labelWarningText: palette.WildCherry.washed,
  link: palette.AzureBlue.original,
  linkInactive: palette.DarkGunmetal.washed,
  linkHover: palette.AzureBlue.light,

  // BACKGROUNDS
  uiBody: palette.UserInterface.body,
  uiContentCard: palette.UserInterface.cards,
  uiContentCardTint: palette.UserInterface.cardsTint,
  uiContentCardHighlight: palette.UserInterface.cardsHighlight,

  hover: palette.blackOpacity,
  modalOpacityBackground: rgba(palette.black, 0.3),
  darkOpacityBackground: rgba(palette.black, 0.5),

  notification: palette.WildCherry.original,
  notificationLight: palette.white,
  tooltipBackground: palette.AzureBlue.dark,
  navigationHover: rgba(palette.AzureBlue.original, 0.1),
  labelMain: palette.PikaYellow.dark,
  labelMainAccent: palette.AzureBlue.dark,
  labelWarning: palette.WildCherry.dark,
  messageSent: palette.AzureBlue.light,
  messageReceived: palette.white,

  // BUTTONS
  buttonMain: palette.PikaYellow.original,
  buttonAccent: palette.AzureBlue.original,
  buttonOpacity: palette.whiteOpacity,
  buttonHover: palette.blackOpacity, // @TODO: find a way to implement

  // INPUT
  inputBackground: palette.whiteOpacity,
  dropdownBackground: palette.whiteOpacity,
  searchBackground: palette.whiteOpacity,
  switchDisabled: palette.DarkGunmetal.washed, // @TODO: check strange usecases

  // BORDERS
  divider: palette.whiteOpacity,
  border: palette.white,
  borderLight: palette.whiteOpacity,
  borderInactive: palette.DarkGunmetal.washed,

  // SPECIAL
  hypeGradient: `linear-gradient(90deg, ${palette.WildCherry.original} 0%, ${palette.PikaYellow.original} 100%)`,
  starColor1: '#fbef21',
  starColor2: '#fff771',
  starColor3: '#fef9a2',
  progressStart: palette.AzureBlue.light,
  progressEnd: palette.PikaYellow.accent,
  hypeStart: palette.WildCherry.original,
  hypeEnd: palette.PikaYellow.original,
  buttonDarkGradient: `linear-gradient(83.66deg, ${palette.AzureBlue.dark} 0%, ${palette.AzureBlue.light} 100%)`,
  buttonAccentGradient: `linear-gradient(88.17deg, ${palette.WildCherry.dark} 0%, ${palette.WildCherry.washed} 100%);`,
  buttonLightGradient: `linear-gradient(88.17deg, ${palette.TBD.newGreen} 0%, ${palette.UIstatuses.caribbeanGreen} 100%);`,
  buttonWarningGradient: `linear-gradient(88.17deg, ${palette.WildCherry.dark} 0%, ${palette.UIstatuses.sunburnt} 100%);`,

  // SHADOWS
  shadowRight: '5px 0 2px 0 palette.blackOpacity;',
  shadowBottom: '0 5px 2px 0 palette.blackOpacity;',
  shadowBox:
    '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)',
  shadowButton:
    '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);',

  // ------ OLD -------

  // BACKGROUNDS
  backgroundGray: palette.DarkGunmetal.washed, // @TODO: only used on schedule DO NOT USE
  borderActive: rgba(palette.PikaYellow.original, 0.5), // @TODO: only used on schedule DO NOT USE
  backgroundLightGrayOpacity: rgba(palette.DarkGunmetal.washed, 0.1), // Input background && buttons

  // TYPOGRAPHY - BUTTONS
  button: palette.AzureBlue.original,
  buttonDisabled: rgba(palette.AzureBlue.original, 0.5),
  buttonDisabledYellow: rgba(palette.PikaYellow.original, 0.5),
  buttonText: palette.DarkGunmetal.original,
};

export default DarkTheme;

// document.documentElement.style.setProperty('--wasder-link', DarkTheme.link);
// document.documentElement.style.setProperty('--wasder-link-hover', DarkTheme.linkHover);

// document.documentElement.style.setProperty('--wasder-gray', palette.DarkGunmetal.washed);
