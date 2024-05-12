import { createTheme } from "@mui/material";
import colors from "@mui/material/colors";

const theme = createTheme({
//   palette: {
//     primary: {
//       main: orange[500],
//     },
//     secondary: {
//       main: green[500],
//     }
//   },
palette: {
  type: 'light',
  primary: {
    main: 'rgba(63,181,163,0.53)',
  },
  secondary: {
    main: '#f50057',
  },
},


  spacing: 10,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;