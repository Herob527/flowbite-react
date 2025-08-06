"use client";

import { DocSearch } from "@docsearch/react";

import "@docsearch/css";
import "~/styles/docsearch.css";

export function DocSearchInput() {
  return <DocSearch appId="4ECQXWXLSO" indexName="@herob191/flowbite-react" apiKey="9c32f687c9058e3d3f27adff654d48d9" />;
}
