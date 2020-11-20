import React, { FC } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import DayjsUtils from "@date-io/dayjs";

import "src/i18n";

import { BasketStore, BasketStoreProvider } from "src/stores/BasketStore";

import OrderFormWidget from "./components/OrderFormWidget";

interface IProps {
  cateringId: string;
  primaryMainColor: string;
  secondaryMainColor: string;
}

const App: FC<IProps> = ({
  cateringId,
  primaryMainColor,
  secondaryMainColor,
}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryMainColor,
      },
      secondary: {
        main: secondaryMainColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <BasketStoreProvider value={BasketStore.create()}>
          <CssBaseline />
          <OrderFormWidget cateringId={cateringId} />
        </BasketStoreProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

App.defaultProps = {
  cateringId: "",
  primaryMainColor: "#3f51b5",
  secondaryMainColor: "#f50057",
};

export default App;
