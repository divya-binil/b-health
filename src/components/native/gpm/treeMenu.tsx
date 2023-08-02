import React from "react";
import { proseFlexibleNavigationTree } from "../../../content/prose-flexible/_collection";
import type { PathTree, PathTreeNode } from "../../../lib/universal/tree";
import type { IntermediateRouteUnit } from "../../../governance/information-model/route";
import type { CollectionEntry } from "astro:content";

//const r = routes();

const treeNodeHTML = (
  tree: PathTree<CollectionEntry<"prose-flexible">, IntermediateRouteUnit>,
  node?: PathTreeNode<CollectionEntry<"prose-flexible">, IntermediateRouteUnit>,
): string[] => {
  return (node ?? tree).children
    .sort((a, b) => {
      const aGpm = a.terminal?.data.weight ?? 0;
      const bGpm = b.terminal?.data.weight ?? 0;
      return aGpm < bGpm ? -1 : aGpm > bGpm ? 1 : 0;
    })
    .map(
      (child) => `
      <li style="text-indent: -1em; padding-left: 1em;">
      ${
        child.terminal
          ? `📄 <a href=${`/knowledge-center/${child.terminal?.slug}/`}>${
              child.terminal?.data.title
            }</a>`
          : ""
      }
      ${
        child.children.length > 0
          ? `
        <details ${child.level < 5 ? "open" : ""}>
          <summary class="cursor-pointer font-semibold">${
            child.intermediary?.label ?? child.unit
          } </summary>
            <ul>
              ${treeNodeHTML(tree, child).join("\n")}
            </ul>
        </details>`
          : ""
      }
    </li>`,
    );
};

const proseTree = await proseFlexibleNavigationTree();
//const exploreTree = await CollectionEntry["pros_flexible"]();
const TreeMenu: React.FC = () => {
  const sanitizedHTML = treeNodeHTML(proseTree).join("\n");
  return <ul dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default TreeMenu;
