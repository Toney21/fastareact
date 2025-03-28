// Updated Colors with beige and orange palette

const neutral = {
  100: "#FFFFFF",
  200: "#E5E7EB",
  300: "#F6F7FB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
  1000: "#212E28",
  1100: "#D6D6D6",
};

// Beige color palette additions
const beige = {
  100: "#FFFDF5",
  200: "#FDF5E6",
  300: "#FAEBD7",
  400: "#F5DEB3",
  500: "#E6D5B8",
  600: "#D2B48C",
  700: "#C19A6B",
  800: "#B8860B",
  900: "#CD853F",
};

// Orange color palette additions
const orange = {
  100: "#FFF8F2",
  200: "#FFE8D6",
  300: "#FFD4B3",
  400: "#FFB885",
  500: "#FFA057",
  600: "#FF8C42",
  700: "#FF7729",
  800: "#E65C00",
  900: "#CC5500",
};

const background = {
  default: beige[100], // Changed to light beige
  paper: "#FFFFFF",
  custom: beige[200],
  custom2: "#FFFFFF",
  custom3: beige[100],
  custom4: "#ffffff",
  footer1: "#9f9f9f1a",
  footer2: "#9f9f9f0d",
  custom5: beige[100],
  custom6: "#FCFCFD",
  custom7: beige[200],
};

const divider = "#E6E8F0";

const primary = {
  main: orange[600], // Changed primary to orange
  deep: orange[800],
  light: orange[200],
  dark: orange[800],
  semiLight: orange[300],
  contrastText: "#FFFFFF",
  customType1: orange[500],
  customType2: orange[400],
  customType3: orange[700],
  overLay: "#000000",
  lite: "rgba(255, 140, 66, 0.1)", // Orange 600 with opacity
  icon: orange[600],
};

const moduleTheme = {
  pharmacy: orange[600],
  ecommerce: orange[600],
  food: orange[600],
  parcel: orange[600],
};

const horizontalCardBG = beige[300]; // Changed to beige

const secondary = {
  main: beige[600], // Changed secondary to beige
  light: beige[400],
  dark: beige[800],
  contrastText: "#FFFFFF",
};

const success = {
  main: "#14B8A6",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: "#FFFFFF",
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  lite: "#DBF5FF",
  contrastText: "#FFFFFF",
  contrastText1: "#F5F6F8",
  blue: "#0D6EFD",
  custom1: "#31C0F5",
};

const warning = {
  main: orange[600], // Changed warning to orange
  light: orange[200],
  lite: orange[400],
  liter: orange[100],
  dark: orange[800],
  contrastText: "#FFFFFF",
  new: orange[500],
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: "#FFFFFF",
  deepLight: "#FF725E",
};

const text = {
  primary: "#3E594D",
  secondary: "#93A2AE",
  disabled: "rgba(55, 65, 81, 0.48)",
  custom: "#3F3F3F",
  customText1: "#4B5563",
};

const footer = {
  inputButton: beige[400], // Changed to beige
  inputButtonHover: beige[600],
  bottom: "rgba(230, 165, 0, 0.3)", // Orange-based
  foodBottom: "#686B78",
  appDownloadButtonBg: "#1A1A1A",
  appDownloadButtonBgGray: "#3E594D",
  appDownloadButtonBgHover: "#4f4f4f",
  foodFooterBg: "#414141",
};

const customColor = {
  textGray: "#9c9c9c",
  textGrayDeep: "#787676",
  buyButton: beige[400], // Changed to beige
  parcelWallet: "#8B3FFD",
};

const whiteContainer = {
  main: "#ffffff",
};

const pink = {
  main: "#FF6D76",
};

const foodCardColor = beige[100]; // Changed to beige
const paperBoxShadow = "#E5EAF1";
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";
const toolTipColor = neutral[1000];

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
            "-webkit-box-shadow": `0 0 0 100px ${beige[100]} inset`, // Changed to beige
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
    beige, // Added beige palette
    orange, // Added orange palette
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
