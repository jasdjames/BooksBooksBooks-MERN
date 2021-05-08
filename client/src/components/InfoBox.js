export const InfoBox = (props) => {
  const pageName = props.pageName;

  return (
    <div className=" border border-bottom-0 border-dark mb-0">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title text-center display-4 text-info border-0">
            {pageName}
          </h5>
        </div>
      </div>
    </div>
  );
};
