import React from "react";
import { isPeople as Props } from "../pages/PageList";
import { useFormik } from "formik";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddList: React.FC<IProps> = ({ people, setPeople }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
      age: "",
      note: "",
    },
    onSubmit: () => {
      const { name, url, age, note } = formik.values;
      if (!name || !url || !age) {
        return;
      } else {
        setPeople([
          ...people,
          {
            name,
            age: parseInt(age),
            url,
            note,
          },
        ]);
      }
    },
  });
  //   const [input, setInput] = useState({
  //     name: "",
  //     url: "",
  //     age: "",
  //     note: "",
  //   });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ): void => {
  //     setInput({
  //       ...input,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleClick = (): void => {
  //     if (!input.name || !input.age || !input.url) {
  //       return;
  //     } else {
  //       setPeople([
  //         ...people,
  //         {
  //           name: input.name,
  //           url: input.url,
  //           age: parseInt(input.age),
  //           note: input.note,
  //         },
  //       ]);
  //     }
  //   };
  return (
    <div className="">
      <form
        className="flex flex-col justify-center items-center mt-20 gap-4 "
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          placeholder="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          className="w-1/3 border-[1px] border-gray-800 px-2 py-1  "
        />
        <input
          type="text"
          placeholder="url"
          value={formik.values.url}
          onChange={formik.handleChange}
          name="url"
          className="w-1/3 border-[1px] border-gray-800 px-2 py-1  "
        />
        <input
          type="number"
          placeholder="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          name="age"
          className="w-1/3 border-[1px] border-gray-800 px-2 py-1  "
        />
        <textarea
          placeholder="note"
          value={formik.values.note}
          onChange={formik.handleChange}
          name="note"
          className="w-1/3 border-[1px] border-gray-800 px-2 py-1  "
        />
        <button
          type="submit"
          className="bg-blue-600 w-1/3 rounded-sm text-white font-semibold hover:bg-blue-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddList;
