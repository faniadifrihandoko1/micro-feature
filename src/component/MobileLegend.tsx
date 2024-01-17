import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";

import Navbar from "./Navbar";

interface Hero {
  hero_id: number;
  hero_name: string;
  hero_avatar: string;
  hero_role: string;
  hero_specially: string;
}

const MobileLegend: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const { data, refetch } = useQuery(["heroes", search], async () => {
    const response = await axios.get(
      `https://api.dazelpro.com/mobile-legends/hero${search}`
    );
    return response.data;
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      setSearch(`?heroName=${values.search}`);
      refetch();
    },
  });

  const handleReset = () => {
    formik.resetForm();
    setSearch("");
    refetch();
  };

  const renderData = () => {
    return data?.hero.map((hero: Hero) => {
      return (
        <div
          key={hero.hero_id}
          className="flex flex-col bg-white mb-9 rounded-lg shadow-lg mx-auto w-[340px] font-poppins"
        >
          {/* Add your hero image */}
          <h2 className="text-center px-2 pt-2">{hero.hero_name}</h2>
          <p className="text-center text-sm font-sans font-semibold ">
            Peran : <span className="">{hero.hero_role}</span>
          </p>
          <p className="text-center text-sm font-sans font-semibold pb-5">
            Kemampuan Khusus : <span className="">{hero.hero_specially}</span>
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="my-10 px-10 lg:px-24">
        <h1 className="text-center font-semibold text-3xl font-poppins mt-5">
          Mobile <span className="text-red-500">Legend</span> Heroes
        </h1>
        <div className="pr-10 md:pr-0">
          <div className="py-4 px-7 mb-9 rounded-lg   w-full  m-6 overflow-hidden sm:w-96 sm:mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <input
                  type="text"
                  className="border-2 border-slate-500 py-1 px-2 w-full rounded-md placeholder:text-center"
                  name="search"
                  value={formik.values.search}
                  onChange={formik.handleChange}
                  placeholder="search name"
                />
                <div className="flex  gap-2 justify-center w-full items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 px-5 py-1 border-2 w-full border-blue-500  rounded-md text-white font-bold"
                  >
                    Cari
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="bg-white text-black border-2 border-black hover:bg-blue-700 hover:text-white  hover:border-white  px-5 py-1 w-full  rounded-md  font-bold"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">{renderData()}</div>
      </div>
    </div>
  );
};

export default MobileLegend;
