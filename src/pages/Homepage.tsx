import profileImage from "../assets/profile.jpg";
import SearchForm from "../components/SearchForm";

const Homepage = () => {
  return (
    <main className="flex justify-center items-center bg-light_blue h-screen dark:bg-slate-950">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-1 flex-col items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={profileImage}
              alt="profile image"
            />
          </div>
          <h1 className="font-bruno_ace text-4xl text-slate_grey">
            Search
            <span className="text-deep_pink">y</span>
          </h1>
        </div>

        <div className="flex gap-1 flex-col items-center">
          <h2 className="greetings">
            <span>Good</span> <span className="text-deep_pink">afternoon</span>,{" "}
            <span>Shaheer</span>
          </h2>
          <small className="text-base font-b612_mono text-slate_grey">
            Date: 21-08-2023
          </small>
        </div>

        <SearchForm />

        <div className="flex gap-8 justify-center">
          <a
            href="https://www.youtube.com/feed/trending"
            target="_blank"
            className="link"
          >
            Trending
          </a>
          <a href="https://www.wikipedia.org/" target="_blank" className="link">
            Wikipedia
          </a>
          <a
            href="https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en"
            target="_blank"
            className="link"
          >
            News
          </a>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
