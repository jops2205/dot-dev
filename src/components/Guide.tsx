import { Link } from "react-router-dom";
import { formatDate } from "../utils/format-date";

type GuideProps = {
  title: string;
  publicationDate: Date;
  slug: string;
};

export const Guide = ({ title, publicationDate, slug }: GuideProps) => {
  return (
    <Link to={`/guide/${slug}`}>
      <div 
        className={`
          flex 
          flex-col 
          gap-0.5 
          py-4 
          group 
          sm:py-6
          sm:flex-row 
          sm:justify-between
          sm:items-center
        `}
      >
        <h2 
          className={`
            text-lg 
            text-white 
            font-medium
            transition-colors 
            group-hover:text-lime
          `}
        >
          {title}
        </h2>
        <span className="text-sm sm:text-base">
          {formatDate(publicationDate)}
        </span>
      </div>
    </Link>
  );
};