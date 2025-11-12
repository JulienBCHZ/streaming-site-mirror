const Previews = (props) => {
  const tab = props.previews;
  console.log(tab);
  return (
    <div className="previews">
      {tab.map((element) => {
        return <img src={element} alt="show picture" />;
      })}
    </div>
  );
};

export default Previews;
