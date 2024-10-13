type HeadingProps = {
  title: string;
  description: string;
};

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="mt-2 mb-6 sm:mt-4 sm:mb-12">
      <h1 className="text-4xl text-white font-black sm:text-5xl">{title}</h1>
      <p className="mt-2 sm:mt-4 sm:text-lg">{description}</p>
    </div>
  );
};