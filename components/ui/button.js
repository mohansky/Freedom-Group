export default function Button({ children, onClick }) {
  return (
    <button
      className="m-2 px-8 py-4 bg-scblue text-white rounded inline-block mt-8 font-semibold 
      hover:shadow-md hover:bg-blue-600 active:bg-blue-800 active:shadow-inner
      ease-in-out duration-500 focus:animate-ping"
      onClick={onClick}>
      {children}
    </button>
  );
}
