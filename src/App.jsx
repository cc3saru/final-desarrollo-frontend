import { Toaster } from "react-hot-toast";
import Rutas from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Toaster />
      <Rutas />
    </ChakraProvider>
  );
}

export default App;
