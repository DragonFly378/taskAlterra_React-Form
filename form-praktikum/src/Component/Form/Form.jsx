import React, { useState, useEffect } from "react";
import "./form.css";
import Button from "../Button/Button";

const Form = ({ handleChange, values, onSubmit, onReset, errCondition }) => {
  return (
    <>
      <section className="form-section">
        <h1 className="judul">Pendaftaran Peserta Coding Bootcamp </h1>
        <form className="form-section" onSubmit={onSubmit}>
          <div className="row">
            <label>Nama Lengkap</label>
            <input
              onChange={handleChange}
              value={values.namaLengkap}
              type="text"
              placeholder="Masukkan Nama Lengkap Anda"
              name="namaLengkap"
            />
          </div>
          {errCondition.namaLengkap && (
            <div className="error">{errCondition.namaLengkap}</div>
          )}

          <div className="row">
            <label>Email</label>
            <input
              onChange={handleChange}
              value={values.email}
              type="mail"
              placeholder="Masukkan Email"
              name="email"
            />
          </div>
          {errCondition.email && (
            <div className="error">{errCondition.email}</div>
          )}
          <div className="row">
            <label>No Handphone</label>
            <input
              onChange={handleChange}
              value={values.noHandphone}
              type="number"
              placeholder="Masukkan No Handphone"
              name="noHandphone"
            />
          </div>
          {errCondition.noHandphone && (
            <div className="error">{errCondition.noHandphone}</div>
          )}

          <div className="latar-belakang">
            <p>Latar Belakang Pendidikan</p>
            <input
              onChange={handleChange}
              value="IT"
              type="radio"
              id="IT"
              name="latarBelakang"
            />
            <label for="IT">IT</label>
            <input
              onChange={handleChange}
              value="nonIT"
              type="radio"
              id="NonIT"
              name="latarBelakang"
            />
            <label for="NonIT">Non IT</label>
          </div>

          <div className="kelas">
            <label for="kelas">Kelas Coding yang Dipilih</label>
            <select onChange={handleChange} id="kelas" name="kelas">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          <div className="row">
            <label>Foto Surat Kesungguhan</label>
            <input type="file" id="myfile" name="myfile" />
          </div>

          <div className="row">
            <label>Harapan Untuk Coding Bootcamp ini:</label>
            <textarea
              onChange={handleChange}
              id="harapan"
              name="harapan"
              rows="9"
            >
              {values.harapan}
            </textarea>{" "}
          </div>
          <Button type="submit" text={"Submit"} color={"black"} />
          <Button
            type="button"
            style={{ marginLeft: "20px" }}
            text={"Reset"}
            color={"red"}
            onClick={onReset}
          />
        </form>
      </section>
    </>
  );
};

export default Form;
