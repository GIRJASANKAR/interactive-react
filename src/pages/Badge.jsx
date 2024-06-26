const Badge = () => {
  const name = 'Tyler McGinnis';
  const handle = 'tylermcginnis';
  const img = 'https://avatars0.githubusercontent.com/u/2933430';

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-black border-[20px]  rounded-xl border-gray-400 w-4/6 flex flex-col items-center py-10">
        <div className="bg-gray-800 p-10 rounded-lg">
          <img
            className="max-w-[300px] rounded-full"
            alt={`avatar for ${name}`}
            src={img}
          />
          <div className="text-center flex flex-col gap-y-1 pt-4 text-white">
            <h4 className="font-bold">{name}</h4>
            <p>{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
