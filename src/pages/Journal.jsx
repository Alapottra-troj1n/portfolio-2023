import React from "react";
import { useGetAllJournalQuery } from "../features/journal/journalApi";
import Spinner from "../components/reusables/Spinner";
import cursorChange from "../utils/cursorChange";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Journal = () => {
  const { data, error, isLoading } = useGetAllJournalQuery();

  useEffect(() => {
    cursorChange("207, 237, 113");
  }, []);
  const sortedPosts = [...(data?.result ?? [])].sort(
    (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
  );
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center bg-dark">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-dark text-gray-200 min-h-screen">
      <div className="lg:px-40 px-8 py-40 font-primary">
        <div className="flex flex-col gap-10">
          {sortedPosts.map((post) => {
            const createdAt = new Date(post._createdAt).toLocaleString();
            return (
              <Link to={`/journal/${post.slug.current}`}>
                <div className=" py-10 border-b transition-all border-white  hover:border-primary hover:text-primary">
                  <h2 className="lg:text-2xl text-lg mb-2 font-semibold ">
                    {post.title}
                  </h2>
                  <div>
                    <h4 className="text-sm">Written by : {post.author.name}</h4>
                    <h4 className="text-sm">Published at : {createdAt}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journal;
