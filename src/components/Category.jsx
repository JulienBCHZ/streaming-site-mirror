import Previews from "./Previews";

const Category = (props) => {
  const { title, preview, index } = props;
  //   console.log("TAB:", preview);
  return (
    <section className="category">
      <h1>{title}</h1>
      <Previews previews={preview} />
      {/* <div>
        <img src={preview[0]} />
        <img src={preview[1]} />
      </div> */}
    </section>
  );
};

export default Category;
