import { useState } from "react";
import addToFirestore from "../firebase/add";
import Logo from "../images/logo.png";
import Image from "next/image";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [meal, setMeal] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await addToFirestore({ name, email, registrationNumber, meal })
      .then(() => {
        setLoading(false);
        setName("");
        setEmail("");
        setRegistrationNumber("");
        setMeal("");
        setSuccess(true);
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav>
        <Image src={Logo} width={100} height={100} />
      </nav>

      <div className="wpcf7 " id="wpcf7-f156-p143-o1 formwrap">

        <form
          method="post"
          className="wpcf7-form main-form"
          noValidate
          onSubmit={submitForm}
        >
          <center>
            <h1>Sign up for Cyber Defender</h1>
          </center>
          <span className="wpcf7-form-control-wrap Name">
            <label className="label" for="Name">Name</label>
            <input
              type="text"
              name="Name"
              size="40"
              className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="Name"
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </span>
          <span className="wpcf7-form-control-wrap Email">
            <label className="label" for="E-mail">VIT E-mail</label>
            <input
              type="email"
              name="Email"
              size="40"
              className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              aria-required="true"
              aria-invalid="false"
              placeholder="Email"
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </span>
          <span className="wpcf7-form-control-wrap Name">
            <label className="label" for="regno">Registration Number</label>
            <input
              type="text"
              name="Name"
              size="40"
              className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="Registration Number"
              onChange={(e) =>
                setRegistrationNumber(e.target.value)
              }
            />
            <label className="label">Meal preference</label>
            <span className="wpcf7-form-control-wrap Name">
              <select
                className="mealinput wpcf7-form-control wpcf7-select"
                name="Meal"
                onChange={(e) =>
                  setMeal(e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </span>

          </span>
          {/* <span className="wpcf7-form-control-wrap Name">
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
          </span> */}
          {name === "" || email === "" || registrationNumber === "" || meal === "" && loading !== true && success !==true ? 
            <input
              type="submit"
              value="Sign Up"
              className="wpcf7-form-control wpcf7-submit btn-disabled"
            /> : null
          
          }
          {name !== "" && email !== "" && registrationNumber !== "" && meal !== "" && loading !== true && success!==true ?
            <input
              type="submit"
              value="Sign Up"
              className="wpcf7-form-control wpcf7-submit btn"
            /> : null
          }
          {loading === true &&
            <div className="loader">Loading...</div>}
            {success === true && 
            <p className="success-message">Thank you for registering!</p>}
        </form>

        <footer class="footer">
      <p>CYSCOM VITCC | Think before you click.</p>
    </footer>


      </div>
    </>
  );
}
