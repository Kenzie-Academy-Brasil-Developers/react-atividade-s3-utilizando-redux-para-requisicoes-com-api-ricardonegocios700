import "./digimons.css";
import { useSelector } from "react-redux";

export const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <li key={index}>
              <tr>
                <img src={digimon.img} label={digimon.name}></img>
              </tr>
              <tr>{digimon.name} </tr>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
