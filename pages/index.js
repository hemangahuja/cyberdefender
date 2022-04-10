import { useState } from "react";
import addToFirestore from "../firebase/add";

export default function Form() {
  const [formData, setFormData] = useState({});

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await addToFirestore(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <center>
        <h1>Registration Form</h1>
      </center>
      <div className="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
        <form
          method="post"
          className="wpcf7-form"
          noValidate
          onSubmit={submitForm}
        >
          <span className="wpcf7-form-control-wrap Name">
            <input
              type="text"
              name="Name"
              size="40"
              className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </span>
          <span className="wpcf7-form-control-wrap Email">
            <input
              type="email"
              name="Email"
              size="40"
              className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              aria-required="true"
              aria-invalid="false"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </span>
          <span className="wpcf7-form-control-wrap Name">
            <input
              type="text"
              name="Name"
              size="40"
              className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="Registartion Number"
              onChange={(e) =>
                setFormData({ ...formData, registrationNumber: e.target.value })
              }
            />
          </span>
          <span className="wpcf7-form-control-wrap Name">
            <input
              type="text"
              name="VITMail"
              size="40"
              className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="VIT Email Address"
              onChange={(e) =>
                setFormData({ ...formData, vitMail: e.target.value })
              }
            />
          </span>
          <input
            type="submit"
            value="Send"
            className="wpcf7-form-control wpcf7-submit btn"
          />
        </form>
      </div>
    </>
  );
}
