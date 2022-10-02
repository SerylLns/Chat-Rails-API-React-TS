import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const persistore = persistStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
