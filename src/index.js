import { createElement } from "./createElement";
import "./style.css";

const rootElement = document.getElementById("root");

rootElement.append(createElement({ tagName: "h1", content: "Mushegh" }));
