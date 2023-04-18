import Link from "next/link";
const SupportedFreelancingSites = () => {
  return (
    <div className="bottom-0 py-5 gap-4 justify-center items-center right-0 w-full flex">
      <Link href="ponisha.com">
        <img
          src="/logos/ponisha.png"
          width="100"
          height="35"
          className="object-cover"
          alt=""
        />
      </Link>

      <Link href="ponisha.com">
        <img
          src="/logos/parscoders.png"
          width="100"
          height="35"
          className="object-cover"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SupportedFreelancingSites;
