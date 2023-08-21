import { useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { useEffect, useState } from "react";
import fetchAPI from "../components/fetchAPI";

// import data from "../staticData";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [searchData, setSearchData] = useState<any>(null);

  useEffect(() => {
    fetchAPI(`?query=${searchTerm}`).then((data) => setSearchData(data.data));
  }, [searchTerm]);

  return (
    <main className="bg-light_blue dark:bg-slate-950 min-h-screen w-full py-8 px-12 max-sm:px-4">
      <SearchForm inputWidth="min(80%, 1040px)" />
      <div className="py-8 text-slate-950 dark:text-neutral-300">
        <p className="italic">
          Search Results for{" "}
          <span className="text-deep_pink">{searchData?.search_term}</span>
        </p>

        {searchData?.knowledge_panel && (
          <div
            className="p-4 border border-greyish_blue dark:border-slate-700 mt-2 rounded-md"
            style={{
              width: "min(100%, 1040px)",
            }}
          >
            <h2 className="font-semibold text-lg leading-3 font-b612_mono">
              {searchData?.knowledge_panel.name}
            </h2>
            <small className="text-slate_grey">
              {searchData?.knowledge_panel.label}
            </small>
            <div className="flex gap-4 py-2">
              <img
                className="block h-24"
                src={searchData?.knowledge_panel.image.url}
                alt="Image"
              />
              <p className="text-slate_grey dark:text-zinc-400">
                {searchData?.knowledge_panel.description.text}&nbsp;
                <a
                  href={searchData?.knowledge_panel.description.url}
                  className="text-royal_blue underline"
                >
                  {searchData?.knowledge_panel.description.site}
                </a>
              </p>
            </div>

            <div className="py-2">
              {searchData?.knowledge_panel.info.map((i: any) => (
                <div key={i.title} className="py-1">
                  <h2>
                    <span className="font-semibold">{i.title}</span>:{" "}
                    <span className="text-slate-700 dark:text-slate-500">
                      {i.labels.join(", ")}
                    </span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="py-8">
          {searchData?.results.map((res: any, idx: number) => (
            <div key={idx} className="py-4">
              <h3 className="text-lg text-royal_blue leading-3 max-sm:leading-5 hover:underline">
                <a href={res.url} target="_blank">
                  {res.title}
                </a>
              </h3>
              <small>{res.url}</small>
              <p
                className="text-zinc-700 dark:text-zinc-400"
                style={{
                  width: "min(100%, 700px)",
                }}
              >
                {res.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchResults;
