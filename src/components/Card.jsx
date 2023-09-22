const Card = () => {
  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-md max-w-lg">
      <div className="flex my-2">
        <div className="flex-1 justify-start">
          <span className="bg-dark-3 text-white px-4 py-1 rounded-full text-sm">
            E-sports
          </span>
        </div>
        <div className="flex-1 text-right text-sm font-medium">
          July 23, 2043
        </div>
      </div>
      <div className="flex my-2">
        <h2 className="text-2xl font-bold">
          Quest Name - <span>Mobile Legends Bang Bang </span>
        </h2>
      </div>
      <div className="flex my-2">
        <p className="text-sm font-medium">
          Zone 43 Tres Reyes, Bato, Camarines Sur, 10 km away
        </p>
      </div>
    </div>
  );
};

export default Card;
