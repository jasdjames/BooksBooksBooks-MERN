import { Outlet } from 'react-router';

export const Main = (props) => {
    
  return(
  <>
  <div>
      <Header/>
      </div>
      <div>
      <Outlet />;
</div>
</>
};
