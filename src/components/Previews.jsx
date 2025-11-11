const Previews = (props) => {
  const tab = props.previews;
  console.log(tab);
  return (
    <div className="previews">
      {tab.map((element) => {
        return <img src={element} alt="movie picture" />;
      })}
      {/* <img src={preview[0]} />
      <img src={preview[1]} /> */}
    </div>
  );
};

export default Previews;
