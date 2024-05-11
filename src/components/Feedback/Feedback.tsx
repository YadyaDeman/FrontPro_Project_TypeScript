import Button from "components/Button/Button";
import { FeedbackProps } from "./types";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
} from "./styles";

function Feedback({
  like = 0,
  dislike = 0,
  addLike,
  addDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <Result>{like}</Result>
        </LikeDislikeContainer>
        <div className="like-dislike-container">
          <Button name="Dislike" onButtonClick={addDislike} />
          <div className="result">{dislike}</div>
        </div>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
