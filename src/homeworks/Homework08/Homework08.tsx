/*
Homework
Задание
Перед началом работы необходимо ответвиться от папки main репозитория, в котором мы работаем с React и TypeScript

Требования по ДЗ:

переписать все стили в компонентах, которые лежат в папке components, используя библиотеку Emotion (по примеру того, как мы это делали в классе)
нужно расширить компонент Button: передать ему props disabled. Если disabled === true, то Button становится серой
cоздайте компонент Homework08 в папке homeworks, в нем должно быть 2 компонента кнопки - Button. Первая кнопка должна быть обычного цвета, а вторая цвета, который должен быть, если кнопка disabled
импортируйте компонент Homework08 в App.tsx и верните его из компонента App
*/ 


import Button from "components/Button/Button"
import { Homework08Wrapper } from "./styles"


function Homework08(){

    return (
        <Homework08Wrapper>
        <Button name="Button" />
        <Button name="Disable button" disabled />
        </Homework08Wrapper>
    )
}

export default Homework08