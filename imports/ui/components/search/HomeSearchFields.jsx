import React from 'react';

export const HomeTextSearch = () => {
  return <input id="textSearch" style={{textAlign: "left", border: "0px"}} placeholder="Search here" />
}

export const HomeTypeSearch = () => {
  setTimeout(() => {
    $("#searchType").material_select();
  }, 200)
  return(
    <select id="searchType" defaultValue={FlowRouter.getQueryParam("type")}>
      <option value="">Pick an Experience</option>
      <option value="Learn">Learn</option>
      <option value="Socialize">Socialize</option>
      <option value="Buy">Buy</option>
    </select>
  )
}

export const HomeCategorySearch = () => {
  setTimeout(() => {
    $("#searchCategory").material_select();
  }, 200)
  return (
    <select id="searchCategory" defaultValue={FlowRouter.getQueryParam("category")}>
      <option value="">Pick a Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Sports">Sports</option>
        <option value="Creative">Creative</option>
        <option value="Services">Services</option>
        <option value="Handicraft">Handicraft</option>
    </select>
  )
}
