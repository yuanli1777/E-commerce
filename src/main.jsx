import "./index.css";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import router from "./routes/router";


const root = document.querySelector("#root");



// createRoot(root).render(App());
createRoot(root).render(<RouterProvider router={router} />);

//  ==========================
//create  view
// const app = createElement(
//     "div",
//     {id:"category-section",className:"p-5"},
//     createElement(
//         "p",
//         {className:"text-3xl text-gray-500"},"Product Categories"),
//     createElement(
//         "div",null,
//         categories.map((category) => createElement("button",{className:"btn btn-primary m-1 border border-gray-300 px-4 py-1 rounded text-gray-500"},category))
//     )
// );

// render

//===========
// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-3xl","text-gray-500");

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("btn", "btn-primary", "m-1","border","border-gray-300","px-4","py-1","rounded","text-gray-500");
//     return btn;
// }
// root.append(title);
// categories.forEach((category) => root.append(categoryButton(category)));
