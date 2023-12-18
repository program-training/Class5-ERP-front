import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  quantity: number[];
}
const StatistsGraph = ({ quantity }: Props) => {
  return (
    <LineChart
      series={[
        {
          data: quantity,
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
};
export default StatistsGraph;
