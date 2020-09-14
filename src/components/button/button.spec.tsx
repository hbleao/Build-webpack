import React from "react";
import { shallow } from "enzyme";

import Button from "../button";

describe("Switch Button", () => {
  const wrapper = shallow(<Button />);

  it("Button", () => {
    expect(wrapper.text()).toEqual("button-ok");
  });
});
