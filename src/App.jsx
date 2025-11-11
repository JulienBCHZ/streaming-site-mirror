import "./App.css";
import Header from "./components/Header";

import data from "./assets/movies.json";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((element, index) => {
          console.log(element);
          return (
            <Category
              title={element.category}
              preview={element.images}
              key={index}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
