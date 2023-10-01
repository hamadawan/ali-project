const Tabs: React.FunctionComponent<{
  options: any[];
  className?: string;
  onClick: Function;
}> = ({ options, className, onClick }) => {
  return (
    <div
      className={`${className} flex gap-x-8 text-primary cursor-pointer text-2xl font-bold justify-center`}
    >
      {options.map((option, index) => (
        <div
          key={option.id}
          onClick={() => onClick(index)}
          className={`hover:text-secondary hover:border-[#DBDFE8] border rounded-t-[20px] p-4 ${
            option.active && 'text-secondary'
          }`}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};
export default Tabs;
