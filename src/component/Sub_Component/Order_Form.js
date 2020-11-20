import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Field, Form, Formik, getIn } from "formik";
import OrderFormSchema from "../Sub_Component/Order_Form_Validation";
export default function Order_Page() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  let defaultValues = {
    firstName: "",
    // lastName: "",
    // address: "",
    // secAddress: "",
    // city: "",
    // state: "",
    // zipCode: 11111,
    // phoneNumber: "",
    // price: 0,
  };
  function handleFormSubmit(value) {
    console.log(value);
  }
  return (
    <Grid container style={{ marginTop: "20px" }}>
      <Grid item xs={10}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={defaultValues}
          validationSchema={OrderFormSchema}
          enableReinitialize
          validateOnMount={true}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ values, handleSubmit, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="firstName"
                value={getIn(values, "firstName")}
                label="First Name"
                variant="outlined"
                required
              />

              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
