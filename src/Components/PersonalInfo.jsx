const PersonalInfo = (props) => {
  const { name, age, stats, id, place = "TamilNadu" } = props;
  const { height, weight, type } = stats;
  return (
    <div>
      <h3>This is Personal Info component</h3>
      <h2>
        {name}- {age}-{height}/{weight}
      </h2>
      <h4>
        {place}-{weight}-{type}
      </h4>
    </div>
  );
};

export default PersonalInfo;
