import Root from "./Root";
import { shallow, mount } from "enzyme";
import axios from "axios";
import { act } from "@testing-library/react";
import InfoSection from "../../components/InfoSection/InfoSection";
import Spinner from "../../components/Spinner/Spinner";
import ApiEndpoints from "../../features/ApiEndpoints/ApiEndpoints";
import mockPetStore from "../../mock/pertstore.json";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/ErrorMessages";
import { ReasonPhrases } from "http-status-codes";

describe("Root Component", () => {
  beforeEach(() => {
    const mockGet = jest.spyOn(axios, "get");
    mockGet.mockResolvedValueOnce({ data: mockPetStore });
  });

  it("Sholud render spinner while data are fetching", () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("Sholud fetch data and render ui components", async () => {
    const wrapper = mount(<Root />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find(InfoSection)).toHaveLength(1);
    expect(wrapper.find(ApiEndpoints)).toHaveLength(1);
  });
});

describe("Root Component with failing request", () => {
  it("Sholud render error message", async () => {
    const mockGet = jest.spyOn(axios, "get");
    mockGet.mockRejectedValueOnce({
      data: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
    const wrapper = mount(<Root />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find(InfoSection)).toHaveLength(0);
    expect(wrapper.find(ApiEndpoints)).toHaveLength(0);
    expect(wrapper.find("[data-testid='error-message']").text()).toBe(
      DEFAULT_ERROR_MESSAGE
    );
  });
});
