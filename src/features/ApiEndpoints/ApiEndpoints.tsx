import Disclosure from "../../components/Disclosure/Disclosure";
import PathsComponent from "./components/Paths/Paths";
import { Tag } from "../../types/Tag";
import { Paths } from "../../types/Paths";
import { groupByEndpoint } from "./utils/object-manipulation";
import { SortButtons } from "../../components/SortButtons/SortButtons";
import { useState } from "react";

interface ApiEndpointsProps {
  paths: Paths;
  tags: Tag[];
}

const ApiEndpoints = ({ paths, tags }: ApiEndpointsProps) => {
  const [sortedTags, setSortedTags] = useState<Tag[]>(tags);
  const groupedPaths = groupByEndpoint(paths);
  const sortAscending = () => {
    const sortedArray = tags.sort((tag1, tag2) =>
      tag1.name.localeCompare(tag2.name)
    );
    setSortedTags([...sortedArray]);
  };
  const sortDescending = () => {
    const sortedArray = tags.sort(
      (tag1, tag2) => tag1.name.localeCompare(tag2.name) * -1
    );
    setSortedTags([...sortedArray]);
  };

  return (
    <>
      <SortButtons ascCallback={sortAscending} descCallback={sortDescending} />
      {sortedTags.map((tag) => (
        <Disclosure
          key={tag.name}
          button={
            <span>
              <b className="pr-2">{tag.name}</b>
              <span className="text-xs"> {tag.description}</span>
            </span>
          }
          panel={<PathsComponent paths={groupedPaths[tag.name]} />}
        ></Disclosure>
      ))}
    </>
  );
};
export default ApiEndpoints;
