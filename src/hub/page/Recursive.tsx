import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function uuid() {
  return `${new Date()}${Math.random() * 1000}`;
}

const data: TRecursiveItem[] = [
  {
    name: "node_modules",
    id: uuid(),
  },
  {
    name: "src",
    id: uuid(),
    children: [
      {
        name: "react",
        id: uuid(),
        children: [
          {
            name: "src",
            id: uuid(),
            children: [
              {
                name: "components",
                id: uuid(),
                children: [
                  {
                    name: "ag-grid",
                    id: uuid(),
                    children: [
                      {
                        name: "ag-grid",
                        id: uuid(),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "react-query",
        id: uuid(),
      },
      {
        name: "ag-grid",
        id: uuid(),
        children: [
          {
            name: "ag-grid",
            id: uuid(),
            children: [
              {
                name: "ag-grid",
                id: uuid(),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "package.json",
    id: uuid(),
    children: [
      {
        name: "react-table",
        id: uuid(),
      },
    ],
  },
  {
    name: "vite.config.json",
    id: uuid(),
    children: [
      {
        name: "zustand",
        id: uuid(),
      },
    ],
  },
];

export const Recursive = () => {
  return (
    <Box>
      {data.map((child) => (
        <Entry entry={child} key={child.id} depth={1} />
      ))}
    </Box>
  );
};

type TRecursiveItem = {
  name: string;
  children?: TRecursiveItem[];
  id: string;
};

const Entry = ({ entry, depth }: { entry: TRecursiveItem; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <Box>
      {entry.children ? (
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          + {entry.name}
        </Button>
      ) : (
        <Text>{entry.name}</Text>
      )}
      {isExpanded && (
        <Box style={{ paddingLeft: `${depth * 10}px` }}>
          <Text>{entry.name}</Text>
          {entry.children?.map((childEntry) => (
            <Entry key={childEntry.id} entry={childEntry} depth={depth + 1} />
          ))}
        </Box>
      )}
    </Box>
  );
};
