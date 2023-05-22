import Button from "../ui/button";

export default function Form() {
  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="mb-4 tracking-wider font-semibold text-3xl">
        Get In Touch
        </h5>
        <div className="grid grid-cols-2 gap-6">
          <label className="block">
            {/* <span className="text-gray-700">Full name</span> */}
            <input
              type="text"
              className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="Full Name"
            />
          </label>
          <label className="block">
            {/* <span className="text-gray-700">Email address</span> */}
            <input
              type="email"
              className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="Email Address"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6">
          <label className="block">
            {/* <span className="text-gray-700">Your message</span> */}
            <textarea
              className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    resize-none
                  "
              rows="5"
              placeholder="Your message"
            ></textarea>
          </label>
        </div>

        <Button type="submit">Submit</Button>
      </div>
    </>
  );
}
