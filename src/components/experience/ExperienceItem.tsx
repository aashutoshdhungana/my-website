type ExperienceItemProps = {
  fromTime: string,
  toTime: string,
  title: string,
  location: string,
  description: string,
  index: number,
  stack: string,
}
const ExperienceItem:React.FC<ExperienceItemProps> = ({ fromTime, toTime, title, location, description, index, stack }) => (
  <div className={`mb-0 md:flex gap-2 justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
    <div className="order-1 w-[350px]">
      <div className={`px-4 py-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
        <p className="text-sm">{fromTime} - {toTime}</p>
      </div>
    </div>
    <div className="hidden z-20 md:flex items-center order-1 bg-[#F6F7F8] shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-[#F6F7F8]"></h1>
    </div>
    <div className="order-1 bg-[#F6F7F8] rounded-lg shadow-xl w-[350px] px-6 py-4 animate-fadeIn">
      <h3 className="mb-1 font-bold text-gray-800 text-lg">{title}</h3>
      <h3 className="mb-3 font-bold text-gray-800 text-md">{location}</h3>
      <p className="mb-3 text-sm text-gray-600">{stack}</p>
      <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100 hidden md:block">{description}</p>
    </div>
  </div>
);

export default ExperienceItem;