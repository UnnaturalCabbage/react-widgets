import React, { FC } from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import DayjsUtils from "@date-io/dayjs";

import "../i18n";

import { BasketStore, BasketStoreProvider } from "../stores/BasketStore";

import OrderView from "./components/OrderView";

interface IProps {
  cateringId: string;
}

const App: FC<IProps> = ({ cateringId }) => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <BasketStoreProvider value={BasketStore.create()}>
        <CssBaseline />
        <OrderView cateringId={cateringId} />
      </BasketStoreProvider>
    </MuiPickersUtilsProvider>
  );
};

App.defaultProps = {
  cateringId: "",
};

export default App;
