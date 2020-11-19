import React from "react";
import { useTranslation } from "react-i18next";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { IMealModel } from "../../../models/MealModel";

interface Props {
  meals: IMealModel[];
  actionsComponent?: React.ComponentType<{ meal: IMealModel }>;
}

const MealsTable: React.ComponentType<Props> = ({
  meals,
  actionsComponent: ActionsComponent,
}) => {
  const { t } = useTranslation();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("meal_name")}</TableCell>
            {/* <TableCell align="right">{t("calories")}</TableCell>
            <TableCell align="right">{t("fat")}</TableCell>
            <TableCell align="right">{t("carbs")}</TableCell>
            <TableCell align="right">{t("protein")}</TableCell> */}
            <TableCell align="right">{t("meal_weight")}</TableCell>
            <TableCell align="right">{t("meal_price")}</TableCell>
            {ActionsComponent && <TableCell align="right"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((meal) => (
            <TableRow key={meal.id}>
              <TableCell component="th" scope="row">
                {meal.name}
              </TableCell>
              {/* <TableCell align="right">{meal.caloriesPerGrams}</TableCell>
              <TableCell align="right">{meal.fatPerGrams}</TableCell>
              <TableCell align="right">{meal.carbPerGrams}</TableCell>
              <TableCell align="right">{meal.proteinsPerGrams}</TableCell> */}
              <TableCell align="right">
                {meal.grams}
                {t("meal_grams_short")}
              </TableCell>
              <TableCell align="right">
                {meal.price}
                {t("UAH")}
              </TableCell>
              {ActionsComponent && (
                <TableCell align="right">
                  <ActionsComponent meal={meal} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MealsTable;
