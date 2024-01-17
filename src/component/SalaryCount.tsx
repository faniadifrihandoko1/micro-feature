import { useFormik } from "formik";
import React, { useState } from "react";

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
    <div className=" my-10  px-10  lg:px-24">
      <h1 className="text-center font-semibold text-3xl font-poppins">
        Salary <span className="text-red-500">Count</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-14 mt-10">
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
            <button
              className="bg-blue-700 hover:bg-blue-900 rounded-md px-4 py-1 py-2 text-white"
              type="submit"
            >
              Cek Jawaban
            </button>
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

      <h1 className="my-6 text-center text-2xl font-semibold">
        LEARNING OBJECTIVES
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border  text-sm font-light border-gray-950 dark:border-slate-800">
                <thead className="border-b font-medium border-gray-950 dark:border-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 border-gray-950 dark:border-slate-800"
                    >
                      Topics
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 border-gray-950 dark:border-slate-800"
                    >
                      Explanation
                    </th>
                    <th scope="col" className="px-6 py-4">
                      IsDone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-950 dark:border-slate-800">
                    <td className="whitespace-nowrap border-r px-1 py-4 border-gray-950 dark:border-slate-800">
                      Variable & State Management
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 border-gray-950 dark:border-slate-800">
                      Untuk menyimpan data dummy yang akan ditampilkan juga data
                      inputan dari user dan data yang diacak untuk ditampilkan
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-950 dark:border-slate-800">
                    <td className="whitespace-nowrap border-r px-1 py-4 border-gray-950 dark:border-slate-800">
                      HOF
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 border-gray-950 dark:border-slate-800">
                      Untuk melakukan manipulasi data dengan text inputan dari
                      user
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-950 dark:border-slate-800">
                    <td className="whitespace-nowrap border-r px-1 py-4 border-gray-950 dark:border-slate-800">
                      useEffect
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 border-gray-950 dark:border-slate-800">
                      Sebagai efek samping ketika ada perubahan data untuk
                      memberi tau score yang akan selalu di update ketika
                      nilainya betul
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-950 dark:border-slate-800">
                    <td className="whitespace-nowrap border-r px-1 py-4 border-gray-950 dark:border-slate-800">
                      Conditional
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 border-gray-950 dark:border-slate-800">
                      Untuk menghandle sebuah inputan agar sesuai dengan apa
                      yang di simpan
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-950 dark:border-slate-800">
                    <td className="whitespace-nowrap border-r px-1 py-4 border-gray-950 dark:border-slate-800">
                      Looping
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 border-gray-950 dark:border-slate-800">
                      Untuk mengubah nilai string menjadi nilai array
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl mt-8 font-semibold text-center">
            Submit Your Work
          </h1>
          <div className="mb-2 mt-4">
            <input
              className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full"
              type="text"
              name="answer"
              placeholder="Input your github link"
            />
          </div>
          <div className="mb-2 mt-4">
            <input
              className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full "
              type="text"
              name="answer"
              placeholder="Input your Vercel Link"
            />
          </div>
          <button
            className="bg-blue-700 hover:bg-blue-900 rounded-md px-4 py-2  text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryCount;
