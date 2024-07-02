

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['All Meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
  
  return (
    <div className=" flex items-center justify-center xs:gap-x-5 lg:gap-x-10">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`text-[#004370] xs:text-[12px] md:text-[16px] font-semibold lg:px-8 py-2  ${activeTab === index ? 'border-b-4 border-[#004370]' : 'border-b-4 border-transparent'}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
