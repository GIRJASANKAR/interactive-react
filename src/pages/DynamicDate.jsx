const DynamicDate = () => {
  const today = new Date();
  return <p>Today is {today.toLocaleDateString()}</p>;
};

export default DynamicDate;
