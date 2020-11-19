import React from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "@material-ui/pickers";

import dayjs, { Dayjs } from "dayjs";

import PhoneField from "../../../components/PhoneField";

interface Props {
  dateValue: Dayjs;
  onDateChange: (date: Dayjs) => void;
  onOpenMenuClick: () => void;
}

const ContactForm: React.ComponentType<Props> = ({
  dateValue,
  onDateChange,
  onOpenMenuClick,
}) => {
  const { t } = useTranslation();
  const minDate = dayjs().add(1, "day");
  const maxDate = dayjs().add(1, "week");

  return (
    <>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <DateTimePicker
            inputVariant="outlined"
            fullWidth
            margin="normal"
            minDate={minDate}
            maxDate={maxDate}
            views={["date", "hours"]}
            value={dateValue}
            ampm={false}
            onChange={(date) => onDateChange(date as Dayjs)}
            placeholder={t("date")}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            onClick={onOpenMenuClick}
            variant="contained"
            color="primary"
          >
            {t("open_menu")}
          </Button>
        </Grid>
      </Grid>
      <TextField
        margin="normal"
        type="text"
        name="firstname"
        placeholder={t("firstname")}
        required
      />
      <PhoneField
        margin="normal"
        type="tel"
        name="name"
        value={0}
        placeholder={t("phone")}
        required
      />
      <TextField
        margin="normal"
        type="email"
        name="email"
        placeholder={`${t("email")} ${t("field_optional")}`}
      />
      <TextField
        margin="normal"
        type="text"
        name="address"
        placeholder={`${t("address")} ${t("field_optional")}`}
        required
      />
      <Grid container justify="flex-end" spacing={3}>
        <Grid item xs={12}>
          <Button
            fullWidth
            style={{ marginTop: "30px" }}
            variant="contained"
            color="primary"
          >
            {t("order")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
