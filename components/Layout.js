import Head from "next/head";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col justify-center items-center w-screen flex-1 bg-gray-400">
        {children}
      </main>
      <footer className="flex w-full h-6 justify-center items-center text-gray-500 text-sm">
        @Udemy 2021
      </footer>
    </div>
  );
}
