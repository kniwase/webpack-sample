import universeJson from "../assets/universe.json";

const getAnswer = fetch(universeJson)
  .then((res) => res.json())
  .then(({ answer }) => `人生、宇宙、すべての答えは ${answer} です`);
export { getAnswer };
