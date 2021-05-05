// import { ResultsBox } from '../components';
export const InfoBox = (props) => {
  const pageName = props.pageName;
  const btnOne = props.btnOne;
  const btnTwo = props.btnTwo;

  return (
    <div className=" border border-dark m-3">
      <div className="card">
        <div className="card-body border border-dark">
          <h5 className="card-title ">{pageName}</h5>
          <div className="card-text border border-dark">
            <div>
              The Results go here
              <div className="float-right">
                <button type="button" className="btn btn-info">
                  {btnOne}
                </button>
                <button type="button" className="btn btn-info ">
                  {btnTwo}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
