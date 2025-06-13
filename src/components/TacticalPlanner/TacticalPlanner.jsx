import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CharacterIcon from './CharacterIcon';
import CardIcon from './CardIcon';
import AnnotationArea from './AnnotationArea';
import './TacticalPlanner.css';

const initialCharacters = [
  { id: 'character-1', name: 'Personagem 1' },
  { id: 'character-2', name: 'Personagem 2' },
];
const initialCards = [
  { id: 'card-1', name: 'Carta 1' },
  { id: 'card-2', name: 'Carta 2' },
];

const TacticalPlanner = () => {
  const onDragEnd = (result) => {
    // Lógica para atualizar o estado após o drag end.
    // Implementar a lógica para mover os itens no array.
    console.log(result);
  };

  return (
    <div className="tactical-planner-container">
      <h1>Planner Tático</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="planner-area">
          <Droppable droppableId="characters" direction="horizontal" type="CHARACTER">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="character-list"
              >
                {initialCharacters.map((character, index) => (
                  <Draggable key={character.id} draggableId={character.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CharacterIcon character={character} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="cards" direction="horizontal" type="CARD">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="card-list"
              >
                {initialCards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CardIcon card={card} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <AnnotationArea />
    </div>
  );
};

export default TacticalPlanner;