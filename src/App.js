import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import "./App.css";

const item1 = {
  id: v4(),
  name: "Graduate from Flatiron School",
};

const item2 = {
  id: v4(),
  name: "Look for Software Engineering Jobs",
};

const item3 = {
  id: v4(),
  name: "Get dat money!",
};

const App = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    inbox: {
      title: "Inbox",
      items: [item1, item2, item3],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    completed: {
      title: "Completed",
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    console.log("from", source);
    console.log("to", destination);

    // if item is dropped outside colummns, return
    if (!destination) {
      console.log("not dropped in droppable");
      return;
    }

    // if item is dropped in the same place, return
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("dropped in same place");
      return;
    }

    // create copy of the item
    const itemCopy = state[source.droppableId].items[source.index];

    setState((prev) => {
      prev = { ...prev };
      // removes original item from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // adds the copy of item to the new items array
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        inbox: {
          title: "Inbox",
          items: [{ id: v4(), name: text }, , ...prev.inbox.items],
        },
      };
    });

    setText("");
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return (
            <div key={key} className="column">
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable-col"
                    >
                      {data.items.map((el, idx) => {
                        return (
                          <Draggable
                            key={el.id}
                            index={idx}
                            draggableId={el.id}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className={`item ${
                                    snapshot.isDragging && "dragging"
                                  }`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {el.name}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
              {data.title === "Inbox" && (
                <div className="input-field">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button className="btn" onClick={addItem}>
                    Add
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default App;
