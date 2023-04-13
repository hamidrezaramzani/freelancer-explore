import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
const Logo = () => {
  return (
    <div className="w-2/4 md:w-1/4 flex items-center gap-3">
      <button>
        <AiOutlineMenu fontSize={25} />
      </button>
      <Link
        href="/"
        className="font-yekan-bold text-indigo-700 text-md md:text-xl"
      >
        فریلنس اکسپلور
      </Link>
    </div>
  );
};

export default Logo;
