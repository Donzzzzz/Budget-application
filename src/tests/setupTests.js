import Enzyme from "enzyme";
import DotEnv from "dotenv";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

DotEnv.config({ path: ".env.test" });
