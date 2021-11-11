import Reactotron from "reactotron-react-js";
import tronsauce from "reactotron-apisauce";
import { reactotronRedux } from "reactotron-redux";
const reactotron = Reactotron.configure()
  .use(tronsauce()) // let's connect!
  .use(reactotronRedux()) // we can use plugins here -- more on this later
  .connect();

export default reactotron;
