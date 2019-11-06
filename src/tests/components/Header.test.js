import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";
import { exportAllDeclaration } from "@babel/types";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("Expensify");

  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   // console.log(renderer.getRenderOutput());
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
