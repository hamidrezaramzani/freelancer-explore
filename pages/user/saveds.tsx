import Head from "next/head";
import Header from "@/components/Header/Header";
import { GetServerSideProps } from "next";
import { withIronSessionSsr } from "iron-session/next";
import ironSessionOptions from "@/helpers/ironSessionOptions";
import FreelanceItem from "@/components/FreelanceItem/FreelanceItem";
import { useQuery } from "react-query";
import Loading from "@/components/Loading/Loading";
import axios from "axios";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";

interface UserSavedsProps {
  isLogged: boolean;
  userId: string;
}
function UserSaveds({ isLogged, userId }: UserSavedsProps) {
  const {
    data: list,
    isError,
    isLoading,
  } = useQuery(["list", userId], async () => {
    return await (
      await axios.get(`/api/user/saveds`)
    ).data;
  });

  const renderLoading = () => {
    return isLoading ? (
      <>
        <Loading />
        <Loading />
        <Loading />
      </>
    ) : (
      <></>
    );
  };

  const renderList = () => {
    if (!isLoading && !isError && list.length) {
      return list.map((item: any, index: number) => {
        return (
          <FreelanceItem
            keyword={String(userId)}
            isLogged={isLogged}
            item={item}
            key={index}
          />
        );
      });
    } else if (!isLoading && isError) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-96">
          <span>
            <RiSignalWifiErrorLine fontSize={100} className="text-indigo-600" />
          </span>
          <h2 className="text-indigo-500 font-yekan-bold">
            خطایی پیش آمده است. لطفا اطلاع دهید
          </h2>
        </div>
      );
    } else if (!isLoading && !isError && !list.length) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-96">
          <span>
            <TbError404 fontSize={100} className="text-indigo-600" />
          </span>
          <h2 className="text-indigo-500 font-yekan-bold">
            نتونستیم چیزی که میخوای رو پیدا کنیم
          </h2>
        </div>
      );
    }

    return [];
  };

  return (
    <>
      <Head>
        <title>موقعیت های شغلی ذخیره شده</title>
        <meta
          name="description"
          content="اینجا میتونید به یک باره به موقعیت های فریلنسری بهترین سایت های ایران دسترسی داشته باشید"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full-vh flex flex-col items-center bg-gradient-to-r  bg-slate-100 dark:from-slate-900 dark:to-slate-700">
        <Header isLogged={isLogged} />
        <div className="relative w-11/12 md:w-2/3 bg-slate-200  dark:bg-slate-900 flex flex-col gap-10 home-page justify-center items-center p-10 rounded-md">
          <div className="flex justify-between w-full">
            <h1 className="text-xl text-indigo-500 font-yekan-bold">
              موقعیت های شغلی ذخیره شده
            </h1>
          </div>
          <div className="flex flex-col w-full py-5">
            {renderLoading()}
            {renderList()}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = (req.session as any).user;

    if (!user) {
      return {
        redirect: {
          destination: "/user/login",
        },
        props: {
          isLogged: false,
        },
      };
    }

    return {
      props: {
        isLogged: true,
        userId: user.id,
      },
    };
  },
  ironSessionOptions
);

export default UserSaveds;
