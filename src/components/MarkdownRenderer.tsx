import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { contents } from "../contents";

export const MarkdownRenderer = () => {
  const { slug } = useParams();
  const content = contents.find(content => content.slug === slug);

  return (
    <article>
      <ReactMarkdown>{content?.body}</ReactMarkdown>
    </article>
  );
};
