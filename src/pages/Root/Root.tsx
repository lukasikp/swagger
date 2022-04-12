import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import ApiEndpoints from "../../features/ApiEndpoints/ApiEndpoints";
import { SwaggerResponse } from "../../types/Swagger";
function Root() {
  const { data, loading, status } = useFetch<SwaggerResponse>(
    "https://petstore.swagger.io/v2/swagger.json"
  );

  console.log(data);
  return (
    <div className="w-full pt-16">
      <div className="w-full mx-auto bg-white rounded-2xl">
        {loading && <span>Loading</span>}
        {data && <ApiEndpoints paths={data.paths} tags={data.tags} />}
      </div>
    </div>
  );
}

export default Root;
