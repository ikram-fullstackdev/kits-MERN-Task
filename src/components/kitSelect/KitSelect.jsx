import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { CiSearch } from "react-icons/ci";
import { customStyles } from "./reactSelectStyles";
import axios from "axios";
import { ReactSelectCustomMenu } from "./ReactSelectCustomMenu";

const URL = "http://localhost:8000/v1";

const ReactKitSelect = () => {
  const [selectedKit, setSelectedKit] = useState(null);
  const [kitData, setKitData] = useState([]);

  const getKits = async (inputValue = "") => {
    const response = await axios.get(`${URL}/kit?q=${inputValue}`);
    return response.data.map((kit) => ({
      value: kit.shipping_tracking_code,
      label: kit.label_id,
    }));
  };
  const debouncedLoadOptions = async (inputValue, callback) => {
    try {
      const kitOptions = await getKits(inputValue);
      setKitData(kitOptions);
      callback(kitOptions);
    } catch (error) {
      callback([]);
    }
  };

  const handleKitSelect = (selectedOption) => {
    setSelectedKit(selectedOption);
  };

  useEffect(() => {
    const getDefaultKits = async () => {
      const kitOptions = await getKits();
      setKitData(kitOptions);
    };
    getDefaultKits();
  }, []);

  return (
    <div className="p-2 gap-x-3 flex justify-between items-center">
      <div className="flex">
        <div className="flex items-center gap-2">
          <CiSearch size={30} />
        </div>
        <div
          className={` border-violet-50 selection:flex toggleSearchitems-center justify-between`}
        >
          <div style={{ flex: 1 }} className="MenuPortal bg-red">
            <AsyncSelect
              isMulti
              loadOptions={debouncedLoadOptions}
              onChange={handleKitSelect}
              value={selectedKit}
              components={{ Menu: ReactSelectCustomMenu }}
              placeholder="Search for a kit..."
              styles={customStyles}
              defaultOptions={kitData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactKitSelect;
