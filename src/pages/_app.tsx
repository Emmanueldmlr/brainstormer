import Footer from "@/components/Landing/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import { connectors, provider } from "@/config/wagmi";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { createClient, WagmiConfig } from "wagmi";

export default function App({ Component, pageProps }: AppProps) {
  const client = createClient({
    autoConnect: true,
    provider: provider,
    connectors: connectors,
  });

  return (
    <ChakraProvider resetCSS>
      <WagmiConfig client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </ChakraProvider>
  );
}
