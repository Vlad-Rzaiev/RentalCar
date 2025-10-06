import * as Yup from "yup";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CustomDayPicker } from "../CustomDayPicker/CustomDayPicker";
import { Button } from "../Button/Button";
import styles from "./BookForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .required("Email is required")
    .test("is-valid-email", "Invalid email address", (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
    ),

  startBookDate: Yup.date().nullable().required("Start date is required"),

  endBookDate: Yup.date()
    .nullable()
    .required("End date is required")
    .min(
      Yup.ref("startBookDate"),
      "End date must be the same or after start date"
    ),

  comment: Yup.string()
    .trim()
    .max(500, "Comment must be at most 500 characters"),
});

export const BookForm = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [showCalendarFrom, setShowCalendarFrom] = useState(false);
  const [showCalendarTo, setShowCalendarTo] = useState(false);
  const calendarRefFrom = useRef();
  const calendarRefTo = useRef();

  const initialValues = {
    name: "",
    email: "",
    startBookDate: null,
    endBookDate: null,
    comment: "",
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        calendarRefFrom.current &&
        !calendarRefFrom.current.contains(e.target)
      ) {
        setShowCalendarFrom(false);
      }
      if (calendarRefTo.current && !calendarRefTo.current.contains(e.target)) {
        setShowCalendarTo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log(values);
      toast.success("Your car has been successfully booked!");

      resetForm();

      setFrom(null);
      setTo(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {({ setFieldValue, values, isValid, isSubmitting, dirty }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Book your car now</h2>
          <p className={styles.text}>
            Stay connected! We are always ready to help you.
          </p>

          <div className={styles.fieldWrapper}>
            <Field
              className={styles.input}
              name="name"
              type="text"
              placeholder="Name*"
            />
            <ErrorMessage
              className={styles.errorMessages}
              name="name"
              component="span"
            />
          </div>

          <div className={styles.fieldWrapper}>
            <Field
              className={styles.input}
              name="email"
              type="text"
              placeholder="Email*"
            />
            <ErrorMessage
              className={styles.errorMessages}
              name="email"
              component="span"
            />
          </div>

          <div className={styles.dateWrapper}>
            <div className={styles.dateFieldWrapper}>
              <CustomDayPicker
                name="startBookDate"
                label="Booking date from*"
                selected={from}
                setSelected={(date) => {
                  setFrom(date);
                  setFieldValue("startBookDate", date);
                  if (
                    values.endBookDate &&
                    date &&
                    new Date(values.endBookDate) < new Date(date)
                  ) {
                    setTo(null);
                    setFieldValue("endBookDate", null);
                  }
                }}
                showCalendar={showCalendarFrom}
                setShowCalendar={setShowCalendarFrom}
                calendarRef={calendarRefFrom}
                inputClassName="startInput"
                minDate={new Date()}
                maxDate={to || undefined}
              />
              <ErrorMessage
                className={styles.errorMessages}
                name="startBookDate"
                component="span"
              />
            </div>

            <div className={styles.dateFieldWrapper}>
              <CustomDayPicker
                name="endBookDate"
                label="Booking date to*"
                selected={to}
                setSelected={(date) => {
                  setTo(date);
                  setFieldValue("endBookDate", date);
                }}
                showCalendar={showCalendarTo}
                setShowCalendar={setShowCalendarTo}
                calendarRef={calendarRefTo}
                inputClassName="endInput"
                minDate={from || new Date()}
              />
              <ErrorMessage
                className={styles.errorMessages}
                name="endBookDate"
                component="span"
              />
            </div>
          </div>

          <div className={styles.areaWrapper}>
            <Field
              className={clsx(styles.input, styles.textarea)}
              name="comment"
              as="textarea"
              placeholder="Comment"
            />
            <ErrorMessage
              className={clsx(styles.errorMessages, styles.areaErrorMessages)}
              name="comment"
              component="span"
            />
          </div>

          <div className={styles.btnWrap}>
            <Button
              type="submit"
              btnText="Send"
              btnSize="small"
              disabled={!isValid || isSubmitting || !dirty}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
