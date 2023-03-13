import { connectors, provider } from '@/config/wagmi';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient, WagmiConfig } from 'wagmi'

export default function App({ Component, pageProps }: AppProps) {
  
  const client = createClient({
    autoConnect: true,
    provider: provider,
    connectors: connectors,
  });

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
