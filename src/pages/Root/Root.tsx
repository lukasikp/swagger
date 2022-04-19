import React from "react";
import useFetch from "../../services/useFetch";
import ApiEndpoints from "../../features/ApiEndpoints/ApiEndpoints";
import { DefinitionProvider } from "../../context/DefinitionsContext/DefinitionContext";
import InfoSection from "../../components/InfoSection/InfoSection";
import Spinner from "../../components/Spinner/Spinner";

function Root() {
  const { data, loading } = useFetch<any>(
    "https://petstore.swagger.io/v2/swagger.json"
  );

  return (
    <div className="w-full pt-8">
      <div className="w-full mx-auto bg-white rounded-2xl">
        {loading && <Spinner />}
        {data && (
          <>
            <InfoSection {...data.info} />
            <DefinitionProvider definitions={data.definitions} swagger={data}>
              <ApiEndpoints paths={data.paths} tags={data.tags} />
            </DefinitionProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default Root;
