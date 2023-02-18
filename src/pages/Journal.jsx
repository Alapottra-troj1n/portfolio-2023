import React from "react";
import { useGetAllJournalQuery } from "../features/journal/journalApi";
import Spinner from "../components/reusables/Spinner";
import { PortableText } from "@portabletext/react";
import { textSerializer } from "../utils/textSerializer";

const Journal = () => {
  const { data, error, isLoading } = useGetAllJournalQuery();
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <div className=" bg-secondary">
      <div className="px-40 pt-40 font-primary">
        <div className="flex flex-col gap-5">
          {data.result.map((post) => (
            <div className="h-40 bg-red-400">{post.title}</div>
          ))}

          <PortableText components={textSerializer} value={data.result[0].body} />
        </div>
      </div>
    </div>
  );
};

export default Journal;
