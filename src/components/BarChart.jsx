import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const BarChartContainer = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={'10 10'}></CartesianGrid>
        <XAxis dataKey={'date'}></XAxis>
        <YAxis allowDecimals={false}></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={'count'} fill="#2cb1bc" barSize={'75'}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartContainer;
