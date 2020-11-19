import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

import { useBasketStore } from "../../../stores/BasketStore";

const MealsBasket: React.ComponentType = observer(() => {
  const { t } = useTranslation();
  const basketStore = useBasketStore();

  console.log([...basketStore.basket.values()]);

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <AppBar position="static">
        <Box padding="10px">
          <Typography variant="button" component="h3">
            {t("meals_basket")}
          </Typography>
        </Box>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        component={(props) => <Paper square {...props} />}
      >
        <Box flexGrow="1">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("meal_name")}</TableCell>
                  <TableCell align="right">{t("meal_qty")}</TableCell>
                  <TableCell align="right">{t("meal_price")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...basketStore.basket.values()].map(({ meal, qty }) => (
                  <Fragment key={meal.id}>
                    {qty !== 0 && (
                      <TableRow>
                        <TableCell>{meal.name}</TableCell>
                        <TableCell align="right">{qty}</TableCell>
                        <TableCell align="right">
                          {meal.price * qty}
                          {t("UAH")}
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TableContainer>
          <Table>
            <TableBody>
              <TableCell>{t("total")}</TableCell>
              <TableCell align="right">
                {basketStore.totalPrice}
                {t("UAH")}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
});

export default MealsBasket;
