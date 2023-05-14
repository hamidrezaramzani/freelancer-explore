import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "next-themes";
import DrawerProvider from "@/context/DrawerProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";
import SearchHistoryProvider from "@/context/SearchHistoryProvider";
export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          cacheTime: Infinity,
        },
      },
    });
  }
  return (
    <SearchHistoryProvider>
    <DrawerProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      >
        <QueryClientProvider client={queryClientRef.current}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <ToastContainer />
      </ThemeProvider>
    </DrawerProvider>
    </SearchHistoryProvider>
  );
}
