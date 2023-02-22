import "../styles/globals.scss";
import { SessionProvider, useSession } from "next-auth/react";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <SessionProvider session={session}>
        {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
        ) : (
            <Component {...pageProps} />
        )}
      </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push("/login");
  }

  return children;
}

export default MyApp;
