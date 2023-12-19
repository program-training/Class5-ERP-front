import { useQuery } from "@apollo/client";
import { LineChart } from "@mui/x-charts/LineChart";
import { GET_CHANGE } from "../../../../apollo/queries-temporary-location/get-change-on-product ID";
import MessagePendingOrError from "../../productsDisplay/components/MessagePendingOrError";
import { useEffect } from "react";
import { statisticChanged } from "../../../../apollo/queries-temporary-location/get-statistics-subscription";

interface ProductStatistics {
  current_quantity: number;
  changed_on: string;
}

interface Props {
  productId: string | number
}
const StatistsGraph = ({ productId }: Props) => {
  const dates: number[] = [];
  const quantity: number[] = [];

  const { data, loading, error, subscribeToMore } = useQuery(GET_CHANGE, {
    variables: { getProductStatisticsId: `${productId}` || '11111111' },
  });

  useEffect(() => subscribeToMore({
    document: statisticChanged,
    variables: { productId },
    updateQuery: (prev, { subscriptionData }) => {
      console.log('data. prev:', prev, 'new:', subscriptionData);
      
      if (!subscriptionData.data) return prev;
      const newChange = subscriptionData.data.commentAdded;

      return Object.assign({}, prev, {
        post: {
          comments: [newChange, ...prev.post.comments]
        }
      })
    }}), [])
  
  return (<>
    {loading && (
      <MessagePendingOrError message={"load"} title={"load products"} />
    )}
    {!data && error && (
      <MessagePendingOrError message={error.message} title={"error"} />
    )}
    {data &&
      data.getProductStatistics.map((p: ProductStatistics) => {
        dates.push(new Date(p.changed_on).getDate());
        quantity.push(p.current_quantity);
      })}
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
