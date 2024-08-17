import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
import { FaBug, FaCalendarCheck, FaSuitcase } from 'react-icons/fa6';
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcase></FaSuitcase>,
      color: '#e9b949',
      bcg: '#fcefc7',
    },

    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck></FaCalendarCheck>,
      color: '#647acd',
      bcg: '#e0e8fc',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug></FaBug>,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item}></StatItem>;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
