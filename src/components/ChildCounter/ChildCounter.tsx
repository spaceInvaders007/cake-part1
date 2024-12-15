import React, { ReactNode, useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import './ChildCounter.css'

interface CountChildrenProps {
  children: ReactNode;
}

const CountChildren: React.FC<CountChildrenProps> = ({ children }) => {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    const renderedTree = ReactDOMServer.renderToString(<>{children}</>);

    const parseAndCountChildren = (htmlString: string): number => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");

      const countNodes = (node: Node): number => {
        let count = 0;

        node.childNodes.forEach((child) => {
          if (
            child.nodeType === Node.ELEMENT_NODE ||
            child.nodeType === Node.TEXT_NODE
          ) {
            count++;
          }

          count += countNodes(child);
        });

        return count;
      };

      return countNodes(doc.body);
    };

    const totalChildren = parseAndCountChildren(renderedTree);
    setChildCount(totalChildren);
  }, [children]);

  return (
    <div>
      {children}
      <h5 className="total-children">Total children in the App: {childCount}</h5>
    </div>
  );
};

export default CountChildren;
