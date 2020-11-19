import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import dayjs, { Dayjs } from "dayjs";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import MealsMenu from "../MealsMenu";
import MealsBasket from "../MealsBasket";

import ContactForm from "./components/ContactForm";
import MenuModal from "./components/MenuModal";

import { useMealsStore } from "./store";

interface Props {
  cateringId: string;
}

const OrderView: React.ComponentType<Props> = observer(({ cateringId }) => {
  const mealsStore = useMealsStore({ cateringId });
  useEffect(() => {
    mealsStore.requestAllMeals();
  }, [mealsStore]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(
    dayjs().add(1, "day").set("hour", 12).set("minute", 0)
  );
  const selectDate = (date: Dayjs): void =>
    setSelectedDate(dayjs(date).set("minute", 0));

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Container>
        <Grid container justify="center">
          <Grid item xs={10} md={6}>
            <Box
              height="100vh"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <ContactForm
                dateValue={selectedDate}
                onDateChange={selectDate}
                onOpenMenuClick={openMenu}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <MenuModal
        open={isMenuOpen}
        disableEnforceFocus
        disableAutoFocus
        onClose={closeMenu}
      >
        <Grid container spacing={3} style={{ outlineStyle: "none" }}>
          <Grid item xs={4}>
            <MealsBasket />
          </Grid>
          <Grid item xs={8}>
            <MealsMenu meals={mealsStore.allMeals} />
          </Grid>
        </Grid>
      </MenuModal>
    </>
  );
});

export default OrderView;
