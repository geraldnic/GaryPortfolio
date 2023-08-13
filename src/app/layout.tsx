"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Header from "../../components/Header/Header";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import darkReducer from "../features/dark";

const inter = Inter({ subsets: ["latin"] });

const store = configureStore({
  reducer: {
    dark: darkReducer,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <CacheProvider>
            <ChakraProvider>
              <Header />
              <Box>{children}</Box>
            </ChakraProvider>
          </CacheProvider>
        </Provider>
      </body>
    </html>
  );
}
