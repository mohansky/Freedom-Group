export default function ButtonRound({ children, onClick }) {
  return (
    <button
      className="my-3 p-1 bg-scblue text-white rounded-full inline-block mt-8 font-semibold 
      hover:shadow-md hover:bg-blue-600 active:bg-blue-800 active:shadow-inner
      ease-in-out duration-500 focus:animate-ping" 
      onClick={onClick}
      >
      {children}
    </button>
  );
}
