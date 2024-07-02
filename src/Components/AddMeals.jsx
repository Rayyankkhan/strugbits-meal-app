import React, {useState} from 'react';


const AddMealsModal = ({ isOpen, onAddMeal }) => {

    
    const [selectedWeek, setSelectedWeek] = useState(null);
    
    const handleWeekSelect = (week) => {
        setSelectedWeek(week);
    };
  
    const handleSave = () => {
      if (selectedWeek) {
          onAddMeal(selectedWeek);
        } else {
        alert('Please select a week.');
    }
};

if (!isOpen) return null;

  return (
   <>
    <div className="fixed top-0 bg-opacity-50 flex items-center justify-center bg-black h-screen w-screen  ">
        <div className=" top-36 bg-white rounded-lg shadow-md md:p-8 fixed">
            <h1 className="font-poppins text-[30px] font-semibold text-center mt-7">Select Week</h1>
            <div className="my-10 flex items-center justify-between xs:px-6 md:px-20 xs:gap-x-2 md:gap-x-8">
            {[1, 2, 3, 4].map(week => (
            <button
              key={week}
              className={` rounded-lg md:px-5 md:py-2 xs:px-4 py-2 xs:text-[13px] md:text-[16px]  ${selectedWeek === week ? 'bg-[#CFECFF] ' : 'bg-[#F2F2F2]'}`}
              onClick={() => handleWeekSelect(week)}
            >
              Week {week}
            </button>
          ))}
            </div>
            <div className="my-10 flex items-center justify-center">
            <button className="save-button bg-[#004370] xs:text-[14px] font-semibold font-poppins md:text-[16px] px-14 py-2 rounded-lg text-white" onClick={handleSave}>Save</button>
            </div>
        </div>
    </div>
   </>
  );
};

export default AddMealsModal;
