import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import axios from "axios";

const Convert: React.FC = () => {
  const [mataUang, setMataUang] = useState<string[]>([]);
  const [hasil, setHasil] = useState<number | null>(null);

  const formik = useFormik({
    initialValues: {
      amount: 0,
      before: "USD",
      after: "USD",
    },
    onSubmit: async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${formik.values.before}`
        );

        const rate = response.data.rates[formik.values.after];
        const convert = formik.values.amount * rate;

        setHasil(convert);
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    const fetchMataUang = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/USD"
        );
        const semuaMataUang = Object.keys(response.data.rates);
        console.log(Object.values(response.data.rates));
        console.log(semuaMataUang);
        setMataUang(semuaMataUang);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMataUang();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center font-semibold text-3xl font-poppins mt-5">
        Currency <span className="text-red-500">Converter</span>
      </h1>
      <div className="flex px-5">
        <div className="flex flex-col py-5 px-3 bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <input
              onChange={formik.handleChange}
              type="number"
              name="amount"
              className="border-2 border-slate-300 rounded-lg py-1 px-2 w-full"
            />
            <div className="flex justify-center my-4 gap-2 font-semibold">
              <select
                onChange={formik.handleChange}
                value={formik.values.before}
                className="px-2 py-1"
                name="before"
              >
                {mataUang.map((matauang) => (
                  <option key={matauang} value={matauang}>
                    {matauang}
                  </option>
                ))}
              </select>
              <p className="my-auto">TO</p>
              <select
                onChange={formik.handleChange}
                value={formik.values.after}
                className="px-2 py-1"
                name="after"
              >
                {mataUang.map((matauang) => (
                  <option key={matauang} value={matauang}>
                    {matauang}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 font-semibold p-1 w-40 mx-auto rounded-lg text-white"
            >
              Convert
            </button>
          </form>
          <h1 className="text-center font-poppins mt-4">Hasil</h1>
          <div className="border-2 mt-2 border-slate-300 rounded-lg py-1 px-2 h-9">
            {hasil !== null ? hasil.toFixed(2) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
