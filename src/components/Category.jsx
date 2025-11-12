import Previews from "./Previews";

const Category = (props) => {
  const { title, preview, index } = props;

  return (
    <section className="category">
      <h2>{title}</h2>
      <Previews previews={preview} />
      {/* <div>
        <img src={preview[0]} />
        <img src={preview[1]} />
      </div> */}
    </section>
  );
};

export default Category;
