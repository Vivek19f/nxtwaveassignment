import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import ManageResource from "../components/resourcecomponent/ManageResource";

import VPanel from "../components/vtabs/VPanel";
import VTabs from "../components/vtabs/VTabs";
import { useResourcesData } from "./api.contants";

export default function Home() {
  const { data } = useResourcesData();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilterData(data.data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    if (query.length > 1) {
      const filterSuggestions = data.data.filter(
        (suggestion) => suggestion.title.toLowerCase().indexOf(query) > -1
      );
      setFilterData(filterSuggestions);
    } else {
      setFilterData(data.data);
    }
  };

  // console.log(data);

  return (
    <>
      <Header isButton={true} />
      <div className="" style={{ marginTop: "3rem" }}>
        <VTabs>
          <VPanel title="Resources">
            <ManageResource data={filterData} handleSearch={handleSearch} />
          </VPanel>
          <VPanel title="Request">
            <div className="container">
              <ManageResource
                data={filterData.filter((x) => x?.tag === "request")}
                handleSearch={handleSearch}
                type="request"
              />
            </div>
          </VPanel>
          <VPanel title="Users">
            <div className="container">
              <ManageResource
                data={filterData.filter((x) => x?.tag === "user")}
                handleSearch={handleSearch}
                type="user"
              />
            </div>
          </VPanel>
        </VTabs>
      </div>
    </>
  );
}
