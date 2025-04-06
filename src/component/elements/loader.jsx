export const LoaderTransaction = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="flex justify-between items-start transition-colors duration-300">
        <div className="flex items-center">
          <div className="shimmer bg-gray-300 dark:bg-gray-600 rounded-full p-2 size-12 transition-colors duration-300" />
          <div className="flex flex-col ml-2 space-y-1">
            <div className="h-5 w-40 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
            <div className="h-5 w-30 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-1">
          <div className="h-6 w-40 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
          <div className="h-5 w-30 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export const LoaderTransactionHistory = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900 transition-colors duration-300">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="shimmer bg-gray-300 dark:bg-gray-600 rounded-full size-12 transition-colors duration-300" />
            <div className="flex flex-col ml-3 space-y-2">
              <div className="h-4 w-36 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
              <div className="h-4 w-28 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="h-5 w-28 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
            <div className="h-4 w-24 rounded shimmer bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoaderSaldo = (props) => {
  const { fontSize } = props;

  return (
    <div className="space-y-4 animate-pulse mb-2">
      <div className="flex justify-between items-start transition-colors duration-300">
        <div className="flex items-center">
          <div
            className={`shimmer text-gray-300 dark:text-gray-400  transition-colors duration-300 ${fontSize}`}
          >
            Rp
          </div>
          <div className="flex flex-col ml-2 space-y-1">
            <div
              className={`shimmer text-gray-300 dark:text-gray-400  transition-colors duration-300 ${fontSize}`}
            >
              XX.XXX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const LoaderKalender = () => {
//   return (
//     <div className="animate-pulse grid grid-cols-7 gap-3 mt-6">
//       {Array.from({ length: 28 }).map((_, i) => (
//         <div
//           key={i}
//           className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl"
//         />
//       ))}
//     </div>
//   );
// };

export const LoaderGrafik = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full animate-pulse space-y-3">
        <div className="h-[300px] bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
      <div className="flex justify-between gap-x-4 mt-3">
        <div className="h-4 w-18 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-18 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-18 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
      <div className="flex justify-between gap-x-4 mt-3">
        <div className="h-6 w-30 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};
