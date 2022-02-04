function CharacterCard() {
  return (
    <div className="character-card-outer">
      <div className="flip-card-inner">
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-itmes-center">
            <p className="card-text fs-l fw-bold">Front</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-itmes-center">
            <p className="card-text fs-l fw-bold">Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CharacterCard;
