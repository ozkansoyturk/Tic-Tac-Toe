/* INFO: Différente manière d'organiser et typer les props:

    Solution 1 : Pratique quand il n'y a qu'une prop
    
    function Square({ value }: { value: string }) {
        return <button className="square">{value}</button>;
    }
    Solution 2 : 
    Ce composant Square n'accepte que la prop "value" de type string. 
    Il ne peut pas accepter d'autres propriétés, y compris les enfants.
    Donc, si vous essayez de l'utiliser avec des enfants comme ceci : <Square value="X">Un enfant</Square> 
    Cela générera une erreur car le composant n'est pas configuré pour accepter des enfants.

type Props {
    value: string;
};
    Solution 3 : En utlisant PropsWithChildren, petite différence avec la solution 2
    Ce composant Square est configuré pour accepter des enfants (children) en plus de la prop "value".
    Cela signifie que vous pouvez l'utiliser de la manière suivante : <Square value="X">Un enfant</Square>
    Il n'y aura pas d'erreur, car le composant est explicitement défini pour accepter des enfants en utilisant PropsWithChildren.

type Props = PropsWithChildren<{
    value: string;
}>;

*/

// import { PropsWithChildren } from "react";

// type Props = PropsWithChildren<{
//   value: string | null;
//   onSquareClick: any;
// }>;

interface Props {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: Props) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default Square;
