import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const AreaChartContainer = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
        <XAxis dataKey={'date'}></XAxis>
        <YAxis allowDecimals={false}></YAxis>
        <Tooltip></Tooltip>
        <Area
          type={'monotone'}
          dataKey={'count'}
          stroke="#1e56ef"
          fill="#1c8d81"
        ></Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreaChartContainer;
