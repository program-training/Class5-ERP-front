import { useQuery } from "@apollo/client";
import { LineChart } from "@mui/x-charts/LineChart";
import { GET_CHANGE } from "../../../../apollo/queries-temporary-location/get-change-on-product ID";
import MessagePendingOrError from "../../productsDisplay/components/MessagePendingOrError";
import { useEffect } from "react";
import { STATISTICS_SUBSCRIPTION } from "../../../../apollo/queries-temporary-location/get-statistics-subscription";

interface ProductStatistics {
  current_quantity: number;
  changed_on: string;
}

interface Props {
  productId: string | number;
}
const StatistsGraph = ({ productId }: Props) => {
  const { data, loading, error, subscribeToMore } = useQuery(GET_CHANGE, {
    variables: { getProductStatisticsId: `${productId}` || "11111111" },
  });

  // const dates = data ? data.getProductStatistics.map((p: ProductStatistics) => {
  //   return new Date(p.changed_on).getDate();
  // }) : []

  const quantity = data
    ? data.getProductStatistics.map((p: ProductStatistics) => {
        return p.current_quantity;
      })
    : [];

  useEffect(
    () =>
      subscribeToMore({
        document: STATISTICS_SUBSCRIPTION,
        variables: { productId: `${productId}` },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          return {
            getProductStatistics: subscriptionData.data.statisticChanged,
          };
        },
      }),
    [productId]
  );

  return (
    <>
      {loading && (
        <MessagePendingOrError message={"load"} title={"load products"} />
      )}
      {!data && error && (
        <MessagePendingOrError message={error.message} title={"error"} />
      )}
      <LineChart
        // xAxis={[{ data: dates }]} // תאריך

        series={[
          {
            data: quantity,
            area: true,
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
};
export default StatistsGraph;
