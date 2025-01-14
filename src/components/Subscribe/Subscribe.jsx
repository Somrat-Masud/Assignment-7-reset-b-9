import "../Subscribe/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="banner-section2 text-center w-8/12 ml-32 -mt-12 z-50 items-center space-y-5 h-48 absolute ">
      <h1 className="mt-9">Subscribe To Our Newsletter</h1>
      <p>Get The Latest Updates and News right in your inbox!</p>
      <fieldset class="form-control text-center items-center   ">
        <div class="join">
          <input
            type="text"
            placeholder="username@site.com"
            class="input input-bordered join-item"
          />
          <button class="btn join-item banner-section3">Subscribe</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Subscribe;
