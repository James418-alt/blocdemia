interface iProps {
  title: string;
  content: string;
  time: string;
  button: string;
}
const Card = ({ title, content, button, time }: iProps) => {
  return (
    <div className="p-10 col-span-1 flex flex-col gap-2">
      <div className="bg-gray-800 rounded-t-md w-full h-[200px]"></div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{time}</p>
      <div className="flex items-center justify-center gap-2 bg-purple-700 p-2 text-white text-[18px] rounded-full w-full">
        <button className="">{button}</button>
        {/* <MdArrowRight /> */}
      </div>
    </div>
  );
};

export default Card;
