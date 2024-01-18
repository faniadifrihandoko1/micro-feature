import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import words from "../utils/data";

import Navbar from "./Navbar";

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
    <div>
      <Navbar />
      <div className=" mb-5  px-10  lg:px-24">
        <h1 className="text-center font-semibold text-3xl font-poppins my-8">
          Word <span className="text-red-500">Scramble</span>
        </h1>
        <div className="bg-white max-w-sm mx-auto shadow-lg p-4 rounded-lg font-poppins text-center">
          <p className="my-6">
            Skor : <span>{score}</span>
          </p>
          <h1 className="font-semibold text-2xl mb-4"> Kata yang diacak : </h1>
          <p>{word}</p>
          <form onSubmit={formik.handleSubmit}>
            <div className=" my-5 mx-10 md:mx-0">
              <input
                className="border-2 border-gray-300 focus:border-2 focus:border-blue-500 rounded-md px-1 py-1 w-full md:w-1/2"
                type="text"
                name="answer"
                onChange={handleSubmit}
                value={formik.values.answer}
              />
            </div>

            <button
              className="bg-blue-700 hover:bg-blue-900 rounded-md px-4  py-2 text-white"
              type="submit"
            >
              Cek Jawaban
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WordScramble;
