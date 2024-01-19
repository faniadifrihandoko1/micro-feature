import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";

const CountdownTime: React.FC = () => {
  const [time, setTime] = useState("");
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerStatus, setTimerStatus] = useState(0);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const formik = useFormik({
    initialValues: {
      time: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      formik.resetForm();
      if (timerStatus <= 0) {
        alert(
          "Pilihlah waktu di masa depan bukan masa lalu, karena waktu tidak bisa diulang kembali seperti hati yang kalau sudah patah, sulit banget diperbaiki. Ingat, jangan biarkan remote control kehidupan berada di tangan orang lain!"
        );
      }
      setTime(formik.values.time);
      setIsCountdownActive(true);
    },
  });

  const setButtonReset = () => {
    setTime("");
    setTimerDays("00");
    setTimerHours("00");
    setTimerMinutes("00");
    setTimerSeconds("00");
    setIsCountdownActive(false);
  };

  useEffect(() => {
    const countdownDate = new Date(time).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;
      setTimerStatus(timeDifference);

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimerDays(formatTime(days));
        setTimerHours(formatTime(hours));
        setTimerMinutes(formatTime(minutes));
        setTimerSeconds(formatTime(seconds));
      } else {
        setButtonReset();
      }
    };

    const formatTime = (time: number) => {
      return time < 10 ? `0${time}` : `${time}`;
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <Navbar />
      <h1 className="text-center font-semibold text-3xl font-poppins mt-5">
        Countdown <span className="text-red-500">Time</span>
      </h1>
      <div className="flex px-5">
        <div className="flex flex-col py-5 px-3 border-2 border-gray-900 bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <input
              onChange={formik.handleChange}
              type="datetime-local"
              name="time"
              className="border-2 border-gray-900 rounded-lg py-1 px-2 w-full"
              placeholder="Input Amount"
            />

            <div className="text-center flex my-3 gap-2">
              <button
                type="submit"
                disabled={isCountdownActive}
                className={`${
                  isCountdownActive
                    ? "bg-gray-500"
                    : "bg-gray-900 hover:bg-blue-700"
                } font-semibold p-1 w-1/2  mx-auto rounded-lg text-white`}
              >
                Start
              </button>
              <button
                onClick={setButtonReset}
                className="bg-white border-2 border-gray-900 hover:bg-gray-900  hover:text-white font-semibold p-1 w-1/2  mx-auto rounded-lg text-black"
              >
                Reset
              </button>
            </div>
          </form>
          <h1 className="text-center font-poppins mt-4 text-xl mb-2">
            Countdown
          </h1>
          <div className="border-2 border-gray-900 rounded-md flex pb-2 pt-3 mx-auto w-full justify-center ">
            <div className="text-center  border-black py-1 px-2 w-1/5">
              <div className="bg-black text-white font-poppins text-xl sm:text-2xl lg:text-3xl py-2 rounded-md">
                {timerDays}
              </div>
              day
            </div>
            <div className="text-center  border-black py-1 px-2 w-1/5">
              <div className="bg-black text-white font-poppins text-xl sm:text-2xl lg:text-3xl py-2 rounded-md">
                {timerHours}
              </div>
              hour
            </div>
            <div className="text-center  border-black py-1 px-2 w-1/5">
              <div className="bg-black text-white font-poppins text-xl sm:text-2xl lg:text-3xl py-2 rounded-md">
                {timerMinutes}
              </div>
              min
            </div>
            <div className="text-center  border-black py-1 px-2 w-1/5">
              <div className="bg-black text-white font-poppins text-xl sm:text-2xl lg:text-3xl py-2 rounded-md">
                {timerSeconds}
              </div>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTime;
