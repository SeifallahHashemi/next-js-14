"use client";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import colors from "react-multi-date-picker/plugins/colors";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import Toolbar from "react-multi-date-picker/plugins/toolbar";

const PersianDatePicker = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      showOtherDays={true}
      calendar={persian}
      locale={persian_fa}
      calendarPosition={"bottom-right"}
      multiple={true}
      plugins={[
          <DatePickerHeader key={Math.random().toString(32)} />,
          weekends(),
          <Toolbar
              key={Math.random().toString()}
              position="bottom"
              names={{
                  today: "امروز",
                  deselect: "غیرفعال کردن",
                  close: "خروج"
              }}
          />,
      ]}
    />
  );
};

export default PersianDatePicker;
