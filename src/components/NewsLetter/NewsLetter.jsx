import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletter-title ">Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our news letter and stay updated</p>

      <div className="">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
