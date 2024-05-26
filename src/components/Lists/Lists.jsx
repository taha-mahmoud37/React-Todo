/* eslint-disable react/prop-types */

import ListItem from "../ListItem/ListItem";

export default function Lists({lists , numOfList}) {
    if (lists < 0 ) return;
  return (
    <>
      <h2>task to do - {numOfList} </h2>
      <ul>
        {lists.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ul>
    </>
  );
}
