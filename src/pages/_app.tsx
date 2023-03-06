import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import SavedRecipeContextProvider, {
  SavedRecipeContext,
} from '@/store/SavedRecipeContext';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <SavedRecipeContextProvider>
        <Component {...pageProps} />
      </SavedRecipeContextProvider>
    </SessionProvider>
  );
}
