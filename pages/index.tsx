import Head from "next/head";
import Header from "@/components/Header/Header";
import SupportedFreelancingSites from "@/components/SupportedFreelancingSites/SupportedFreelancingSites";
import SearchBox from "@/components/SearchBox/SearchBox";
import { GetServerSideProps } from "next";
import { withIronSessionSsr } from "iron-session/next";
import ironSessionOptions from "@/helpers/ironSessionOptions";

interface HomeProps {
  isLogged: boolean;
}
function Home({ isLogged }: HomeProps) {
  return (
    <>
      <Head>
        <title>موقعیت های شغلی فریلنسری</title>
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
          <div className="w-full flex flex-col items-center justify-center gap-9">
            <div className="w-full text-center flex flex-col gap-2">
              <h1 className="text-3xl font-yekan-bold text-indigo-700">
                اینجا بهترین موقعیت های فریلنسری را باید پیدا کنید
              </h1>
              <p className="text-slate-600 font-yekan-regular text-sm">
                اینجا میتوانید شغل مورد نظرتون رو از بهترین وبسایت های فریلنسری
                پیدا کنید
              </p>
            </div>

            <SearchBox />
          </div>

          <SupportedFreelancingSites />
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
        props: {
          isLogged: false,
        },
      };
    }

    return {
      props: {
        isLogged: true,
      },
    };
  },
  ironSessionOptions
);

export default Home;
