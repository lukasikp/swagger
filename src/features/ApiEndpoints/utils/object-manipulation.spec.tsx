import { groupByEndpoint } from "./object-manipulation";
import petstore from "../../../mock/pertstore.json";
import { Paths } from "../../../types/Paths";

describe("Object manipuation utils", () => {
  it("Should group paths by endpoint", () => {
    const paths = petstore.paths as unknown as Paths;
    const testedResult = groupByEndpoint(paths);
    const resultKeys = Object.keys(testedResult);
    expect(resultKeys).toHaveLength(3);
    expect(Object.keys(testedResult.pet)).toHaveLength(2);
    expect(Object.keys(testedResult.store)).toHaveLength(2);
    expect(Object.keys(testedResult.user)).toHaveLength(1);
  });
});
