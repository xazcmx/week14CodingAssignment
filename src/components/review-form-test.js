// import React, { useState } from 'react';
// import movieData from "./movie-data" 
// import { v4 as uuidv4 } from 'uuid';


// const Testing = () => {

//     // console.log(movieData);

//     const [list, setList] = useState(movieData);
//     const [name, setName] = useState('');

//     // console.log(movieData);
//     // console.log(list);
//     // console.log(setList);

//     function handleChange(event) {
//     setName(event.target.value);
//         // track input field's state
//     }

//     function handleAdd() {
//         const newList = list.concat({ name, id: uuidv4() });
     
//         console.log(newList);

//     setList(newList);
//         // add item
//     setName("");

//     }

//   return (
//     <div>
//         <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />
 
//       <List list={list} />
//       <div>
//       <input type="text" value={name} onChange={handleChange} />
//         <button type="button" onClick={handleAdd}>
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//     <div>
//       <input type="text" value={name} onChange={onChange} />
//       <button type="button" onClick={onAdd}>
//         Add
//       </button>
//     </div>
//   );

//   const List = ({ list }) => (
//     <ul>
//       {list.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
 
// export default Testing;