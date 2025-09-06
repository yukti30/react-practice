import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // width > 1024 px
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        {/* Show only on large screens */}
        <GridItem
          area="aside"
          bg="yellow"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area="main" bg="red">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
