import React, { useState } from 'react'
import './App.css'

const titleDefaultProps = {
  size: "small",
};

type TypographyProps = {
        children: React.ReactNode;
        size?: "small" | "large";
}

type ParagraphProps = {
    color: string;
}

const Paragraph = ({ children, size, color }: TypographyProps & ParagraphProps) => {
    return (
    <h1
        style={{
            fontSize: size === "small" ? "1.5rem" : "3rem",
            color: color,
        }}
    >
       {children}
    </h1>
    );
};
const Title = ({ children, size }: TypographyProps) => {
    return (
    <h1
        style={{
            fontSize: size === "small" ? "1.5rem" : "3rem",
        }}
    >
       {children}
    </h1>
    );
};

const user = {
    id: 1,
    name: "John Doe",
    age: 30,
    isAdmin: true,
};

const mary: UseAttributes = {
    id: 2,
    name: "Mary Doe",
    age: 25,
    isAdmin: false,
}

function sumNumbers (a: number, b: number) {
    return a + b;
}

function List <ItemType>({
    items,
    render,
 }: {
    items: ItemType[];
    render: (item: ItemType, index: number) => React.ReactNode;
 }) {
    return (
        <ul>
            {items.map((item, index) => {
                return render(item, index);
            })}
        </ul>
    )
}

type UseAttributes = typeof user;

function App() {
  const [count, setCount] = useState<number | null>(null);

  if (count !== null) {
    return <div>{count}</div>;
  }

  const items = [
    {
        code: 1,
        name: "John Doe",
    },
    {
        code: 2,
        name: "Jane Doe"
    },
  ];

  return (
    <div className="App">
        <Title size="small">
            <span>
                Hello <b>Wold</b>
            </span>
        </Title>

        <Paragraph color="red" size="small">
            Eu sou um parágrafo
        </Paragraph>

        <List
        items={items}
        render={(item, index) =>{
            if (item.code === 1) {
                return <p>{item.name}</p>
            }

            return <h3>{item.name}</h3>
        }}
        />
    </div>
  );
  };
export default App
