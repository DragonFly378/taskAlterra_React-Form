import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Component/Form/Form";

const App = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    namaLengkap: "",
    email: "",
    noHandphone: "",
    latarBelakang: "",
    kelas: "",
    file: "",
    harapan: "",
  });

  const onReset = () => {
    setFormValues({
      namaLengkap: "",
      email: "",
      noHandphone: 0,
      latarBelakang: "",
      kelas: "",
      file: "",
      harapan: "",
    });
  };
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.namaLengkap) {
      errors.namaLengkap = "Harap isi Nama Lengkapnya gan!";
    }

    if (!values.email) {
      errors.email = "Email harus diisi gan!";
    } else if (!regex.test(values.email)) {
      errors.email = "Harap isi sesuai format email!";
    }

    if (!values.noHandphone) {
      errors.noHandphone = "Nomor handphone harus diisi gan!";
    }

    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    setFormErrors(errors);
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    const isError = validate(formValues);

    if (Object.keys(isError).length === 0) {
      alert(`Data Pendaftar ${formValues.namaLengkap} Berhasil Diterima`);
    } else {
      alert(`Data Pendaftar tidak sesuai!`);
    }
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        values={formValues}
        onSubmit={onSubmit}
        onReset={onReset}
        errCondition={formErrors}
      />
    </>
  );
};

export default App;
