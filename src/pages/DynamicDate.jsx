const DynamicDate = () => {
  const today = new Date();
  return <p>Todayy is {today.toLocaleDateString()}</p>;
};

export default DynamicDate;
