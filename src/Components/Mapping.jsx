import React, { usestate } from "react";
import { Data } from "./Data";
import PersonalInfo from "./PersonalInfo";

const Mapping = () => {
  const info = Data.map((item) => {
    console.log("mapItem", item);
    const { name, age, place, stats, id } = item;
    const { height, weight, type } = stats;
    return (
      <div key={id}>
        <h3>
          {name}-{age}
        </h3>
        <h4>
          {place}-{type}
        </h4>
      </div>
    );
  });
  console.log("mapItem", info);

  //   const info = Data.map((item) => {
  //     const { name, age, place, stats, id } = item;
  //     const { height, weight, type } = stats;
  //     return (
  //       <div key={id}>
  //         <PersonalInfo
  //           name={name}
  //           age={age}
  //           place={place}
  //           id={id}
  //           stats={stats}
  //           type={type}
  //           weight={weight}
  //           height={height}
  //         />
  //       </div>
  //     );
  //   });

  const filterInfo = Data.filter((item) => {
    console.log("filterItem", item);
    return item.id >= 2;
  });
  console.log("filterInfo", filterInfo);

  return (
    <div>
      <h2>This is Mapping Example</h2>

      {/* *************Direct Mapping********** */}
      {filterInfo.map((rel) => {
        return <h1>{rel.name}</h1>;
      })}

      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.name}-{item.age}
            </h2>
          </div>
        );
      })}

      {/* ************* Mapping with PROPS to child component********** */}
      {/* <h3>Mapping with PROPS to child component</h3>
      {Data.map((item) => {
        const { name, age, place, stats, id } = item;
        const { height, weight, type } = stats;
        return (
          <div key={id} className="condRendering">
            <PersonalInfo
              name={name}
              age={age}
              place={place}
              id={id}
              stats={stats}
              type={type}
              weight={weight}
              height={height}
            />
          </div>
        );
      })} */}

      {/* {info} 
      <PersonalInfo /> */}
      {/* ************* Mapping with SPREAD OPERATOR********** */}

      {/* <h3>Mapping with SPREAD OPERATOR</h3>
     {Data.map((item) => {
        return (
          <div key={item.id} className="condRendering">
            <PersonalInfo {...item} />
          </div>
        );
     })} */}
    </div>
  );
};

export default Mapping;
