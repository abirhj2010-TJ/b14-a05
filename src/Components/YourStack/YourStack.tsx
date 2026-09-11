const YourStack = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-500">
        No technologies selected yet.
      </p>

      <div className="mt-6 flex items-center justify-center py-7 rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
        <p className="text-sm font-medium text-gray-400">Your stack is empty</p>
      </div>
    </div>
  );
};

export default YourStack;
