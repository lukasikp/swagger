import useFetch from "./useFetch";
import axios from "axios";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const testRequestData = { testData: "testData" };
const mockGet = jest.spyOn(axios, "get");

const setup = (mockGetPromise: Promise<any>) => {
  mockGet.mockReturnValueOnce(mockGetPromise);
  const wrapper = ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  );
  const { result } = renderHook(() => useFetch("test-url"), { wrapper });
  return { result };
};

describe("useFetch hook", () => {
  it("Should return data, status and false loading state after success request", async () => {
    const promise = Promise.resolve<any>({
      data: testRequestData,
      status: StatusCodes.OK,
      statusText: ReasonPhrases.OK,
    });
    const { result } = setup(promise);
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.status).toBe(StatusCodes.OK);
    expect(result.current.data).toEqual(testRequestData);
  });

  it("Should return error, status and false loading state after failed request", async () => {
    const promise = Promise.reject({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });

    const { result } = setup(promise);
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.data).toEqual(null);
    expect(result.current.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(result.current.error).toBe(ReasonPhrases.INTERNAL_SERVER_ERROR);
  });
});
