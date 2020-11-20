import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RootRef from "@material-ui/core/RootRef";
import { DateTimePicker } from "@material-ui/pickers";

import dayjs, { Dayjs } from "dayjs";

import PhoneField from "Components/PhoneField";

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

  const domRef = useRef<any>();

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <RootRef rootRef={domRef}>
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
            DialogProps={{
              container: domRef.current,
            }}
          />
        </RootRef>
      </Grid>
      <Grid container xs={4} alignItems="center">
        <Button
          fullWidth
          onClick={onOpenMenuClick}
          variant="contained"
          color="primary"
        >
          {t("open_menu")}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="text"
          name="firstname"
          placeholder={t("firstname")}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <PhoneField
          fullWidth
          type="tel"
          name="name"
          value={0}
          placeholder={t("phone")}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="email"
          name="email"
          placeholder={`${t("email")} ${t("field_optional")}`}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="text"
          name="address"
          placeholder={`${t("address")} ${t("field_optional")}`}
          required
        />
      </Grid>
      <Grid item xs={12} justify="flex-end">
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
  );
};

export default ContactForm;
