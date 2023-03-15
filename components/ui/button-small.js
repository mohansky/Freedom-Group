export default function ButtonSmall({ children, onClick }) {
  return (
    <button
      className="m-1 px-4 py-2 bg-scblue text-white rounded inline-block mt-4 font-semibold 
      hover:shadow-md hover:bg-blue-600 active:bg-blue-800 active:shadow-inner
      ease-in-out duration-500 focus:animate-ping"
      onClick={onClick}>
      {children}
    </button>
  );
}
