'use client'; // Mark this as a client-side component

import { Provider } from "react-redux";
import {store} from "../redux/store"; // Adjust path to where your store is located

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
