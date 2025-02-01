import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Provider>
  </BrowserRouter>,
);
