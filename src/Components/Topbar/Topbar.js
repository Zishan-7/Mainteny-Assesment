const Topbar = () => {
  return (
    <div className="h-14 border-b-2 flex items-center justify-around">
      <h1 className="text-2xl font-bold">Cool University</h1>
      <p className="hidden md:flex text-xl font-medium">Welcome Admin!</p>
      <button className="px-7 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
        Logout
      </button>
    </div>
  );
};

export default Topbar;
