import toast from "react-hot-toast";

const NewsLetter = () => {

    const handleSubscribe = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        console.log(email);
        toast.success('you have successfully subscribed ')
    }
  return (
    <div className="my-6">
      <h2 className="text-xl md:text-2xl  lg:text-4xl text-center font-bold">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-center font-medium py-4">
        Stay updated on the latest food sharing and surplus reduction news and
        events.
      </p>

          <form onSubmit={handleSubscribe} >
          <div className="form-control  ">
        <label className="input-group text-center  block  pb-6">
          <input
                          type="email"
                          name="email"
            placeholder="yourEmail@gmail.com"
                      className="input input-bordered"
                      required
          />
          <button type="submit" className="btn btn-neutral">Subscribe</button>
        </label>
      </div>
    </form>
    </div>
  );
};
export default NewsLetter;
