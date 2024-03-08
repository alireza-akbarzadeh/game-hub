import { Button, Input, Text } from "@chakra-ui/react";
import {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Define the methods that the ref will expose
interface CustomInputRef {
  onFocus: () => void;
  onClick: () => void;
}

// Define props for CustomInput component
interface CustomInputProps extends HTMLProps<HTMLInputElement> {}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
  (props, ref) => {
    const { name, ...rest } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        onFocus: () => {
          inputRef?.current?.focus();
        },
        onClick: () => {
          inputRef?.current?.click();
        },
      }),
      []
    );

    return (
      <div>
        <input ref={inputRef} name={name} {...rest} />
      </div>
    );
  }
);

export const Ref = () => {
  const [value, setValue] = useState<string>("");
  const ref = useRef<CustomInputRef>(null);

  const handleFocusInput = () => {
    ref.current?.onFocus();
    ref.current?.onClick();
  };

  return (
    <>
      <CustomInput
        ref={ref}
        name={value}
        value={value}
        id="id"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          setValue(target.value)
        }
      />
      <Text fontSize={"6xl"}>{value}</Text>
      <Button onClick={handleFocusInput} marginTop={5}>
        Focus
      </Button>
    </>
  );
};
