import Card from "./Card";

const board = ({ data, handleDragAndDrop }) => {
  const drop = (card) => {
    // e.preventDefault();
    // debugger;
    // const card_id = e.dataTransfer.getData("card_id");
    // const card = document.getElementById(card_id);
    // card.style.display = "block";
    // e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="board" onDragOver={dragOver}>
      {data.map((value) => (
        <Card value={value} handleDragAndDrop={handleDragAndDrop} drop={drop} />
      ))}
    </div>
  );
};

export default board;

// const board = (props) => {
//   const drop = (e) => {
//     e.preventDefault();

//     const card_id = e.dataTransfer.getData("card_id");

//     const card = document.getElementById(card_id);
//     card.style.display = "block";

//     e.target.appendChild(card);
//   };

//   const dragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       id={props.id}
//       className={props.className}
//       onDrop={drop}
//       onDragOver={dragOver}
//     >
//       {props.children}
//     </div>
//   );
// };

// export default board;
