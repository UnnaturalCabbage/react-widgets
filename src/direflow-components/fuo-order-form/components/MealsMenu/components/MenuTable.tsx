import React from "react";
import { Observer } from "mobx-react-lite";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { IMealModel } from "Models/MealModel";
import MealsTable from "../../../components/MealsTable";
import { IBasket } from "Stores/BasketStore";

interface Props {
  meals: IMealModel[];
  basketStore: IBasket;
}

const MenuTable: React.ComponentType<Props> = ({ meals, basketStore }) => {
  return (
    <MealsTable
      meals={meals}
      actionsComponent={({ meal }) => (
        <Observer>
          {() => (
            <Grid container justify="flex-end" alignItems="center" spacing={2}>
              <Grid item>
                <RemoveCircleIcon
                  onClick={() => basketStore.removeMeal(meal)}
                  color="primary"
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <TextField
                  onChange={(e) =>
                    basketStore.setMealQty(meal, +e.target.value)
                  }
                  value={basketStore.basket.get(meal.id)?.qty || 0}
                  variant="outlined"
                  size="small"
                  margin="none"
                />
              </Grid>
              <Grid item>
                <AddCircleIcon
                  onClick={() => basketStore.addMeal(meal)}
                  color="primary"
                />
              </Grid>
            </Grid>
          )}
        </Observer>
      )}
    />
  );
};

export default MenuTable;
