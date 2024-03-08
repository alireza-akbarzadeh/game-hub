import { Button, Text } from "@chakra-ui/react";
import { useReducer } from "react";

interface IStateProps {
  count: number;
}

interface IActionProps {
  type: "increment" | "decrement" | "multiply" | "reset";
  payload: { num: number };
}

const ACTIONS: Record<string, IActionProps["type"]> = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  MULTIPLY: "multiply",
  RESET: "reset",
};
const reducer = (state: IStateProps, action: IActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + payload.num };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - payload.num };
    case ACTIONS.MULTIPLY:
      return { ...state, count: state.count * payload.num };
    case ACTIONS.RESET:
      return { count: payload.num };
    default:
      return state;
  }
};

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div>
      <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
        <Button
          onClick={() =>
            dispatch({ type: ACTIONS.INCREMENT, payload: { num: 4 } })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: ACTIONS.DECREMENT, payload: { num: 2 } })
          }
        >
          -
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: ACTIONS.MULTIPLY, payload: { num: 10 } })
          }
        >
          *
        </Button>
        <Button
          onClick={() => dispatch({ type: ACTIONS.RESET, payload: { num: 0 } })}
        >
          C
        </Button>
      </div>
      <Text fontSize="6xl">{state?.count}</Text>
    </div>
  );
};
