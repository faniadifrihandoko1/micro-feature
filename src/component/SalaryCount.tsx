import { useFormik } from "formik";
import React, { useState } from "react";

import Navbar from "./Navbar";

interface Formvalues {
  gajipokok: number;
  tunjangan: number;
  kewajibanpokok: number;
}

const SalaryCount: React.FC = () => {
  const [gajiKotor, setGajiKotor] = useState<number>(0);

  const [gajiBersih, setGajiBersih] = useState<number>(0);
  const formik = useFormik<Formvalues>({
    initialValues: {
      gajipokok: 0,
      tunjangan: 0,
      kewajibanpokok: 0,
    },
    onSubmit: () => {
      const { gajipokok, tunjangan, kewajibanpokok } = formik.values;
      console.log(formik.values);
      const gajikotor = gajipokok + tunjangan;
      const gajibersih = gajikotor - kewajibanpokok;
      setGajiKotor(gajikotor);
      setGajiBersih(gajibersih);
      console.log(gajibersih);
      console.log(`Gaji Bersih`, gajikotor - kewajibanpokok);
    },
  });
  const realtimeGajiPokok = formik.values.gajipokok;
  const handleSubmit = (event: { target: { name: string; value: string } }) => {
    const parsedValue = parseFloat(event.target.value);
    formik.setFieldValue(
      event.target.name,
      isNaN(parsedValue) ? 0 : parsedValue
    );
  };
  return (
    <div>
      <Navbar />
      <div className=" mb-5  px-10  lg:px-24">
        <h1 className="text-center font-semibold text-3xl mt-4 font-poppins">
          Salary <span className="text-red-500">Count</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mt-10 bg-white px-5 py-3 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-2 mt-8 flex flex-col gap-2">
                <label>Gaji Pokok</label>
                <input
                  className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full "
                  type="number"
                  name="gajipokok"
                  onChange={handleSubmit}
                  value={formik.values.gajipokok}
                />
              </div>
              <div className="mb-2 mt-4 flex flex-col gap-2">
                <label>Tunjangan</label>
                <input
                  className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full"
                  type="number"
                  name="tunjangan"
                  onChange={handleSubmit}
                  value={formik.values.tunjangan}
                />
              </div>
              <div className="mb-2 mt-4 flex flex-col gap-2">
                <label className="">Kewajiban Pokok</label>
                <input
                  className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full "
                  type="number"
                  name="kewajibanpokok"
                  onChange={handleSubmit}
                  value={formik.values.kewajibanpokok}
                />
              </div>
              <div className="flex justify-center md:justify-start my-5">
                <button
                  className="bg-blue-700 hover:bg-blue-900 rounded-md px-4  py-2 text-white"
                  type="submit"
                >
                  Cek Jawaban
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold text-center">Hasil :</h1>
            <div className="mt-1 mb-4 flex flex-col ">
              <label>Total Gaji Kotor</label>
              <div className="border-2 mt-1 border-gray-300 px-1 py-2 rounded-lg">
                <h1>{gajiKotor == 0 ? "-" : gajiKotor}</h1>
              </div>
            </div>
            <div className="mt-1 mb-6 flex flex-col">
              <label>Total Gaji Pokok</label>
              <div className="border-2 mt-1 border-gray-300 px-1 py-2 rounded-lg">
                <h1>{realtimeGajiPokok == 0 ? "-" : realtimeGajiPokok}</h1>
              </div>
            </div>
            <div className="mt-1 flex flex-col">
              <label>Total Gaji Bersih</label>
              <div className="border-2 mt-1 border-gray-300 px-1 py-2 rounded-lg">
                <h1>{gajiBersih == 0 ? "-" : gajiBersih}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCount;
