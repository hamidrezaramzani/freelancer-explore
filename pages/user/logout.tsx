import { GetServerSideProps } from "next";
import { withIronSessionSsr } from "iron-session/next";
import ironSessionOptions from "@/helpers/ironSessionOptions";

function Home() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    req.session.destroy();

    return {
      redirect: {
        destination: "/user/login",
      },
      props: {},
    };
  },
  ironSessionOptions
);

export default Home;
