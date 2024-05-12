/*
Homework
Задание
Закончить практическое задание, которые мы начали делать на занятии

###Дубликат требований: Задача Необходимо разработать компонент (Lesson10), для получения и отображение данных, полученных по запросу (факт о котах) URL: https://catfact.ninja/fact

Подготовка:

Залить последние изменения в main
Ответвиться от ветки main (например, lesson10_practice)
Требования:

При загрузке страницы должен происходить запрос на получение данных
Данные должны отображаться в стилизованном блоке на странице
Пока данных нет, то блок отображаться не должен
Также на странице должна быть кнопка ‘GET MORE INFO’, при нажатии на которую также должен происходить запрос данных
При получении данных после клика на кнопку они должны появиться на экране под предыдущими данными в том же блоке
Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен, а должен появиться скролл внутри блока с данными
На странице должна быть вторая кнопка “DELETE ALL DATA”, которая будет удалять все полученные данные
Задача*:

Создайте компонент индикатора загрузки, который будет появляться в процессе получения данных и исчезать, когда данные получены (Spinner или др).Его необходимо использовать в компоненте Lesson 10 P.S. Индикатором загрузки не должен быть текст
*/


import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import {
  ButtonsContainer,
  CatFactWrapper,
  FactsBlock,
  Lesson10Component,
  SpinnerContainer,
} from './styles';

import Button from 'components/Button/Button'
import Spinner from 'components/Spinner/Spinner';

function Lesson10() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCatFact = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://catfact.ninja/fact')
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result
        })
      } else {
        setCatFacts((prevValue) => [...prevValue, result.fact])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCatFact()
  }, []);

  const catFactsElements = catFacts.map((catFact: string) => {
    return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>
  })

  const deleteCatFacts = () => {
    setCatFacts([])
  }

  const isEmptyCatFacts = !catFacts.length;

  // return (
  //   <Lesson10Component>
  //     {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer> :
  //       <>
  //         <ButtonsContainer>
  //           <Button name='GET MORE INFO' onButtonClick={getCatFact} />
  //           <Button name='DELETE ALL FACTS' onButtonClick={deleteCatFacts} disabled={isEmptyCatFacts} />
  //         </ButtonsContainer>
  //         <FactsBlock isHideBlock={isEmptyCatFacts}>{catFactsElements}</FactsBlock>
  //       </>}
  //   </Lesson10Component>
  // )

  return (
    <Lesson10Component>
      <ButtonsContainer>
        <Button name='GET MORE INFO' onButtonClick={getCatFact} />
        <Button name='DELETE ALL FACTS' onButtonClick={deleteCatFacts} disabled={isEmptyCatFacts} />
      </ButtonsContainer>
      {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer> :
        <FactsBlock isHideBlock={isEmptyCatFacts}>{catFactsElements}</FactsBlock>}
    </Lesson10Component>
  )
}

export default Lesson10;
