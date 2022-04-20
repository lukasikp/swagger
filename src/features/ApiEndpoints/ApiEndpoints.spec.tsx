import { shallow } from "enzyme";
import ApiEndpoints from "./ApiEndpoints";
import Disclosure from "../../components/Disclosure/Disclosure";
import petstore from "../../mock/pertstore.json";
import { Paths } from "../../types/Paths";

const { tags, paths } = petstore;

describe("ApiEndpoints component", () => {
  it("Should render disclosure for every Tag", () => {
    const wrapper = shallow(
      <ApiEndpoints tags={tags} paths={paths as unknown as Paths} />
    );
    expect(wrapper.find(Disclosure)).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });
});
