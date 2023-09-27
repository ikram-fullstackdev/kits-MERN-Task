import { components } from "react-select";

export const ReactSelectCustomMenu = (props) => {
  const { options, selectOption } = props;

  const handleOptionClick = (option) => {
    selectOption(option);
  };

  return (
    <components.Menu {...props}>
      <>
        {options.map((el) => (
          <div
            key={el.label_id}
            className={`bg-white pl-2`}
            onClick={() => handleOptionClick(el)}
          >
            <div className="flex items-center justify-between cursor-pointer w-5/5 bg-red-5">
              <div className="flex">
                <div className="flex items-center justify-between">
                  <div className="flex lg:items-center flex-col  lg:flex-row lg:gap-2">
                    <div
                      className={`w-124 h-17 font-lato font-bold text-[0.875rem] leading-17 text-[#202A44]`}
                    >
                      Label id: {el?.label}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-25 h-17 right-6 align-center bg-slate-8">
                <p className="font-lato font-normal text-[0.875rem] leading-17 text-right text-[#9499A8] items-center pr-2">
                  Shipping tracking code: {el?.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    </components.Menu>
  );
};
