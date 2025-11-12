import Previews from "./Previews";

const Category = (props) => {
  const { title, preview, index } = props;

  return (
    <section className="category">
      <h2>{title}</h2>
      <Previews previews={preview} />
    </section>
  );
};

export default Category;
