import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  IMealModel,
  groupByCategory,
  groupByType,
} from "src/models/MealModel";
import { useBasketStore } from "src/stores/BasketStore";

import MenuTable from "./components/MenuTable";
import TabsContainer from "./components/TabsContainer";

interface MealsMenuProps {
  meals: IMealModel[];
}

const TabPanel: React.ComponentType<{ value: number; index: number }> = (
  props
) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const MealsMenu: React.ComponentType<MealsMenuProps> = observer(({ meals }) => {
  const { t } = useTranslation();
  const basketStore = useBasketStore();
  const [currTab, setCurrTab] = useState(0);

  const mealsByTypeAndCateg = useMemo<
    [string, [string, IMealModel[]][]][]
  >(() => {
    const mealsByType = Object.entries(groupByType(meals));
    const result = mealsByType.map<any>(([type, meals]) => {
      return [type, Object.entries(groupByCategory(meals))];
    });
    return result;
  }, [meals]);

  return (
    <div>
      <AppBar position="static">
        <Tabs value={currTab} onChange={(e, value) => setCurrTab(value)}>
          {mealsByTypeAndCateg.map(([type]) => (
            <Tab label={t(`meal_type_${type}`)} key={type} />
          ))}
        </Tabs>
      </AppBar>
      <TabsContainer>
        {mealsByTypeAndCateg.map(([type, categories], i) => (
          <TabPanel key={`${type}-${i}`} value={currTab} index={i}>
            {categories.map(([category, meals], i) => (
              <Accordion key={category} defaultExpanded={i === 0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${category}-panel`}
                  id={`${category}-panel`}
                >
                  <Typography>{t(`meal_category_${category}`)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MenuTable meals={meals} basketStore={basketStore} />
                </AccordionDetails>
              </Accordion>
            ))}
          </TabPanel>
        ))}
      </TabsContainer>
    </div>
  );
});

export default MealsMenu;
