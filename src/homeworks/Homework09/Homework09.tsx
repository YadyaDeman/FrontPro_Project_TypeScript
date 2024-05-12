/* 
Homework
Задание
Перед началом работы необходимо ответвиться от папки main репозитория, в котором мы работаем с React и TypeScript

Требования по ДЗ:

Cоздайте компонент Homework09 в папке homeworks, в нем должно быть 2 компонента Input и компонент кнопки Button
Каждый из инпутов должен быть котролируемым компонентом и контролироваться с помощью родительского состояния
При нажатии на кнопку значения из полей должны быть выведены на экран в двух стилизованных блоках
*/

import Button from "components/Button/Button"
import { Homework09Wrapper, ResultWrapper, ResultsBlock } from "./styles"
import Input from "components/Input/Input";
import { ChangeEvent, useState } from "react";

function Homework09(){
     const [firstNote, setFirstNote] = useState<string>('');
     const [secondtNote, setSecondNote] = useState<string>('');
     const [isShowResult, setisShowResult] = useState<boolean>(false);

const onFirstNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    setFirstNote(event.target.value)
}

const onSecondNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    setSecondNote(event.target.value)
}

const onShowResult =()=>{
    setisShowResult(true)
    //setisShowResult(!setisShowResult) pri klike pokazivaet ili ne pokazivaet rezultat
}

    return(
        <Homework09Wrapper>
<Input placeholder="First name" onInputChange={onFirstNoteInputChange} name="firtsNote" label={"First"} />
<Input placeholder="Second name" onInputChange={onSecondNoteInputChange } name="secondNote" label={"Second"} />
<Button name={"Click me!"} onButtonClick={onShowResult} />
<ResultsBlock isShowResult={isShowResult}>
    <ResultWrapper>{firstNote}</ResultWrapper>
    <ResultWrapper>{secondtNote}</ResultWrapper>
</ResultsBlock>

        </Homework09Wrapper>
    )
}

export default Homework09;