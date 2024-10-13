import { Heading } from "../components/Heading";
import { Guide } from "../components/Guide";
import { contents } from "../contents";

export const Home = () => {
  return (
    <div>
      <Heading 
        title="dot dev" 
        description="If it solves a problem, it's engineering." 
      />
      <ul className="divide-y divide-silver/70">
        {contents.map(({ title, publicationDate, slug }) => (
          <li key={slug}>
            <Guide title={title} publicationDate={publicationDate} slug={slug} />
          </li>
        ))}
      </ul>
    </div>
  );
};