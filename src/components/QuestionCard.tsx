// types
import {AnswerObject} from '../App';
// styles 
import {Wrapper, ButtonWrapper} from '../components/QuestionCard.style'

type Props = {
    question: string;
    answers: string[];
    callback: (e : React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number
}

const QuestionCard:React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNum, 
    totalQuestions
}) => (
        <Wrapper>
            <p className="number">
                Question: {questionNum} / A{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers?.map(answer => (
                    <ButtonWrapper 
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        >
                        <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );

export default QuestionCard;