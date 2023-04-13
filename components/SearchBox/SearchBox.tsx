import Link from "next/link";

const SearchBox = () => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded-md h-12">
      <form action="">
        <div className="w-full flex">
          <div className="w-2/12">
            <button className="w-full cursor-pointer hover:bg-indigo-600 h-12 text-center flex justify-center items-center md:text-md text-sm bg-indigo-500 rounded-md text-white font-yekan-regular">
              جستجو
            </button>
          </div>
          <div className="w-5/12">
            <select className="w-full hidde-expend text-slate-300 rounded-mdrounded-md bg-white h-12 text-center font-yekan-regular outline-none">
              <option value="">نوع کار</option>
              <option value="">گرافیک</option>
              <option value="">برنامه نویسی و طراحی وب</option>
              <option value="">تایپ و ترجمه</option>
              <option value="">تولید محتوا</option>
            </select>
          </div>
          <div className="w-5/12">
            <input
              className="w-full rounded-md placeholder:text-slate-300 bg-white h-12 text-center font-yekan-regular outline-none"
              placeholder="کلید واژه"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
