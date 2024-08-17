import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useState } from 'react';
import BarChartContainer from './BarChart';
import AreaChartContainer from './AreaChart';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  // Data is an alias
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartContainer data={data}></BarChartContainer>
      ) : (
        <AreaChartContainer data={data}> </AreaChartContainer>
      )}
    </Wrapper>
  );
};
export default ChartsContainer;
