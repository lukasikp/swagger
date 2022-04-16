import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import ApiEndpoints from "../../features/ApiEndpoints/ApiEndpoints";
import { SwaggerResponse } from "../../types/Swagger";
import { DefinitionProvider } from "../../context/DefinitionsContext/DefinitionContext";
const petstore = require("../../mock/pertstore.json");
function Root() {
  // const { data, loading, status } = useFetch<any>(
  //   // "https://petstore.swagger.io/v2/swagger.json"
  //   "../../mock/pertstore.json"
  // );
  const data = petstore;
  const loading = false;
  return (
    <div className="w-full pt-16">
      <div className="w-full mx-auto bg-white rounded-2xl">
        {loading && <span>Loading</span>}
        {data && (
          <DefinitionProvider definitions={data.definitions} swagger={data}>
            <ApiEndpoints paths={data.paths} tags={data.tags} />
          </DefinitionProvider>
        )}
      </div>
    </div>
  );
}

export default Root;
