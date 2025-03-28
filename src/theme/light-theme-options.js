// Updated Colors with Beige and Brown Palette

const neutral = {
  100: "#FFFFFF",
  200: "#F5F5F0", // Light beige
  300: "#F8F8F2", // Very light beige
  400: "#B8AEA0", // Muted brown-beige
  500: "#8B7D6B", // Medium brown
  600: "#5D4B3E", // Dark brown
  700: "#4A3C30", // Darker brown
  800: "#352D22", // Almost chocolate
  900: "#231F17", // Deep brown
  1000: "#2E2720", // Warm dark brown
  1100: "#D9D2C5", // Light beige-gray
};

const background = {
  default: "#FAF9F5", // Off-white with beige tint
  paper: "#FFFDF8", // Very light beige-white
  custom: "#F4F1E9", // Light beige
  custom2: "#FFFEFB", // Nearly white with beige hint
  custom3: "#F9F7F0", // Soft beige
  custom4: "#FFFDFA", // Warm white
  footer1: "#9f9f9f1a", // Keep existing
  footer2: "#9f9f9f0d", // Keep existing
  custom5: "#F6F3EB", // Beige tint
  custom6: "#FDFCF8", // Light beige-white
  custom7: "#F5F2EA", // Soft beige
};

const divider = "#D8D1C4"; // Beige-gray divider

const primary = {
  main: "#A67C52", // Warm brown
  deep: "#7A5C3C", // Deep brown
  light: "#F5EEE5", // Light beige
  dark: "#6B4E32", // Dark brown
  semiLight: "#EFE6DA", // Semi-light beige
  contrastText: "#FFFFFF",
  customType1: "#B8916B", // Medium brown
  customType2: "#9E7D5A", // Muted brown
  customType3: "#8F6F4B", // Earthy brown
  overLay: "#000000",
  lite: "rgba(166, 124, 82, 0.1)", // Brown with opacity
  icon: "#A67C52", // Brown for icons
};

const moduleTheme = {
  pharmacy: "#A67C52", // Brown
  ecommerce: "#A67C52",
  food: "#A67C52",
  parcel: "#A67C52",
};

const horizontalCardBG = "#EFE6DA"; // Light beige

const secondary = {
  main: "#B89F80", // Muted brown-beige
  light: "#D4C4B0", // Light beige
  dark: "#8A7255", // Medium brown
  contrastText: "#FFFFFF",
};

const success = {
  main: "#8F9779", // Muted green-brown
  light: "#B8B8A3", // Light green-beige
  dark: "#6B6D56", // Dark green-brown
  contrastText: "#FFFFFF",
};

const info = {
  main: "#7D9EA8", // Muted blue-brown
  light: "#B5C7CC", // Light blue-beige
  dark: "#5C7A83", // Dark blue-brown
  lite: "#E5EBED", // Very light blue-beige
  contrastText: "#FFFFFF",
  contrastText1: "#F5F6F8",
  blue: "#6B8EA8", // Muted blue
  custom1: "#7DA3B8", // Custom blue-brown
};

const warning = {
  main: "#D4A76A", // Golden brown
  light: "#FAF3E5", // Light beige
  lite: "#E8C9A0", // Light brown
  liter: "#FFF8F2",
  dark: "#C28F4F", // Dark golden brown
  contrastText: "#FFFFFF",
  new: "#E6C27A", // New golden brown
};

const error = {
  main: "#B85C4A", // Earthy red
  light: "#D48C7E", // Light earthy red
  dark: "#8C4235", // Dark earthy red
  contrastText: "#FFFFFF",
  deepLight: "#D48C7E", // Light earthy red
};

const text = {
  primary: "#4A3C30", // Dark brown
  secondary: "#8B7D6B", // Medium brown
  disabled: "rgba(74, 60, 48, 0.48)", // Brown with opacity
  custom: "#3F3A35", // Dark muted brown
  customText1: "#5D4B3E", // Dark brown
};

const footer = {
  inputButton: "#E8D9C5", // Light brown-beige
  inputButtonHover: "#C7B8A5", // Medium beige
  bottom: "rgba(122, 92, 60, 0.3)", // Brown with opacity
  foodBottom: "#686B78",
  appDownloadButtonBg: "#352D22", // Dark brown
  appDownloadButtonBgGray: "#4A3C30", // Medium-dark brown
  appDownloadButtonBgHover: "#5D4B3E", // Dark brown
  foodFooterBg: "#414141",
};

const customColor = {
  textGray: "#9C948A", // Gray-beige
  textGrayDeep: "#787169", // Muted brown-gray
  buyButton: "#E6D4B5", // Golden beige
  parcelWallet: "#8B6F4B", // Brown for parcel wallet
};

const whiteContainer = {
  main: "#FFFDF8", // Warm white with beige tint
};

const pink = {
  main: "#D4A6A6", // Muted pink-brown
};

const foodCardColor = "#F8F1E8"; // Light beige
const paperBoxShadow = "#E5DFD5"; // Beige-gray shadow
const roundStackOne = "rgba(255, 253, 248, 0.04)"; // Warm white with opacity
const roundStackTwo = "rgba(255, 253, 248, 0.06)"; // Warm white with opacity
const toolTipColor = neutral[1000]; // Dark brown

export const lightThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px #f0f5f5 inset",
            "-webkit-text-fill-color": "#000",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[500],
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    horizontalCardBG,
    background,
    divider,
    error,
    info,
    mode: "light",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    footer,
    customColor,
    whiteContainer,
    pink,
    paperBoxShadow,
    foodCardColor,
    moduleTheme,
    roundStackOne,
    roundStackTwo,
    toolTipColor,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};
