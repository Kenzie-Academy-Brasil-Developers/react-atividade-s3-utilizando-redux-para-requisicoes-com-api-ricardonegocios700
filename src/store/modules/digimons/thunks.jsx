import axios from "axios";

import { addDigimon } from "./actions";

export const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((resp) => {
      const itemFind = resp.data.find((item) => {
        return item.name.toUpperCase() === digimon.toUpperCase();
      });
      itemFind ? dispatch(addDigimon(itemFind)) : setError(true);
      console.log("thunks itemFind:", itemFind);
    })
    .catch((error) => console.log(error));
};
