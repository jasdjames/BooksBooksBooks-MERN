import { ResultsBox } from '../components';
export const InfoBox = (props) => {
  const pageName = props.pageName;
  return (
    <div className=" border border-dark m-3">
      <div className="card">
        <div className="card-body border border-dark">
          <h5 className="card-title ">{pageName}</h5>
          <div className="card-text border border-dark">
            <ResultsBox />
          </div>
        </div>
      </div>
    </div>
  );
};
