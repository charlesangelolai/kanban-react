import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  const [boards, setBoards] = useState({
    inbox: ["inbox1", "inbox2", "inbox3"],
    action: ["action1", "action2", "action3"],
    completed: ["completed1", "completed2", "completed3"],
  });

  const handleDragAndDrop = () => {
    debugger;
  };

  return (
    <div className="App">
      <h1 className="title">Kanban Board</h1>
      <div className="flexbox">
        {Object.entries(boards).map(([key, data]) => (
          <Board
            id={key}
            data={data}
            handleDragAndDrop={handleDragAndDrop}
          ></Board>
        ))}

        {/* <Board id="board-1" className="board">
          <h2 className="section">Inbox</h2>
          {inbox.map((card) => (
            <Card id="card-1" className="card" draggable="true" value={card} />
          ))}
        </Board>
        <Board id="board-2" className="board">
          <h2 className="section">Action Items</h2>
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
        <Board id="board-3" className="board">
          <h2 className="section">Completed</h2>
          <Card id="card-3" className="card" draggable="true">
            <p>Card three</p>
          </Card>
        </Board> */}
      </div>
    </div>
  );
};

export default App;
