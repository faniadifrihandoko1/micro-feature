import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import words from "../utils/data";

const WordScramble: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [word, setWord] = useState<string>("");
  const [arrayWord, setArrayWord] = useState<number>(0);

  const formik = useFormik({
    initialValues: {
      answer: "",
    },
    onSubmit: () => {
      console.log(formik.values.answer);
      formik.resetForm();
      if (formik.values.answer === words[arrayWord]) {
        setScore(score + 1);
      } else {
        alert("Jawaban Salah Silahkan Coba lagi");
      }
    },
  });

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomNumber];
    function scramble(words: string) {
      const strArray = randomWord.split("");
      for (let i = 0; i < randomWord.length; i++) {
        const j = Math.floor(Math.random() * i);
        const k = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = k;
      }
      words = strArray.join("");
      return words;
    }

    setWord(scramble(randomWord));
    setArrayWord(randomNumber);
  }, [score]);

  const handleSubmit = (event: { target: { name: string; value: string } }) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <div className="container my-10  px-10  lg:px-24">
      <h1 className="text-center font-semibold text-3xl font-poppins">
        Word <span className="text-red-500">Scramble</span>
      </h1>
      <div className="">
        <p className="my-6">
          Skor : <span>{score}</span>
        </p>
        <h1 className="font-semibold text-2xl mb-4"> Kata yang diacak : </h1>
        <p>{word}</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 mt-4">
            <input
              className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-2 w-full md:w-1/2"
              type="text"
              name="answer"
              onChange={handleSubmit}
              value={formik.values.answer}
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

export default WordScramble;
