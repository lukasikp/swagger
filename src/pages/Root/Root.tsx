import useFetch from "../../services/useFetch";
import ApiEndpoints from "../../features/ApiEndpoints/ApiEndpoints";
import { DefinitionProvider } from "../../context/DefinitionsContext/DefinitionContext";
import InfoSection from "../../components/InfoSection/InfoSection";
import Spinner from "../../components/Spinner/Spinner";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/ErrorMessages";

function Root() {
  const { data, loading, error } = useFetch<any>(
    "https://petstore.swagger.io/v2/swagger.json"
  );

  return (
    <div className="w-full pt-8 aaa">
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
        {error && <p data-testid="error-message">{DEFAULT_ERROR_MESSAGE}</p>}
      </div>
    </div>
  );
}

export default Root;
