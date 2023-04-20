import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "next-themes";
import DrawerProvider from "@/context/DrawerProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </DrawerProvider>
  );
}
