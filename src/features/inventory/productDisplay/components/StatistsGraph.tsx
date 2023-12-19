import { useQuery } from "@apollo/client";
import { LineChart } from "@mui/x-charts/LineChart";
import { GET_CHANGE } from "../../../../apollo/queries-temporary-location/get-change-on-product ID";
import MessagePendingOrError from "../../productsDisplay/components/MessagePendingOrError";

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

  const { data, loading, error } = useQuery(GET_CHANGE, {
    variables: { getProductStatisticsId: `${productId}` || '11111111' },
  });
  
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
          data: quantity, // כמות
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
