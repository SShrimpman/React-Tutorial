// Em React tenho que fazer como um component de Livewire, dou wrap numa div ou em um "Fragment" (assim no browser não aparece que está dentro de uma div, tenho que dar import)
// ou como tenho neste momento, dentro duma tag fechada, sem nada escrito, como estou em react, ele automaticamente assume que estou dentro de um fragment

// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// posso usar desta forma abaixo, mas se usar assim : "function ListGroup(props: Props) {" tenho que definir "props." antes de cada sitio onde uso "items" ou "heading"
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Isto é um React State Hook, uso o 'useState' para poder informar que este component vai ter dados que vão mudar ao longo do tempo
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* { items.length === 0 ? <p>No item found!</p> : null } */}
      {/* Desta forma que tenho em baixo, se for true retorna-me o valor a seguir ao "&&", se for falso, retorna-me false, é uma maneira mais concisa da versão acima */}
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
