import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Selects } from "./selects";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Selects />
      </div>
    </QueryClientProvider>
  );
}

export default App;
