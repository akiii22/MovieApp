import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import Star from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <Star color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Star
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Star size={24} color="red" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
