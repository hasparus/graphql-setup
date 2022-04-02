import * as React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { usePastLaunchesQuery } from "./PastLaunches.generated";

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true } },
});

function App() {
  const { data, isLoading, error } = usePastLaunchesQuery({
    limit: 10,
  });

  return (
    <main>
      <pre>{JSON.stringify({ data, isLoading, error }, null, 2)}</pre>
    </main>
  );
}

function DevTools() {
  // ReactQueryDevtools is a noop when process.env.NODE_ENV equals "production".
  return <ReactQueryDevtools />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <DevTools />
    </QueryClientProvider>
  </React.StrictMode>
);
