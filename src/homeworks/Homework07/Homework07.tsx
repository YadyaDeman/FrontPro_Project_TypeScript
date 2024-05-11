/* 
Homework
Задание
Перед началом работы необходимо ответвиться от папки main нового репозитория, в котором мы работаем с React и TypeScript

Задача 1:

Типизировать props компонента Counter
Задача 2:

Создайте компонент Homework07 в папке homeworks, он будет родителем для вашего компонента Feedback. Homework07 он должен контролировать состояние для Feedback (по примеру того как мы делали Counter)
Покажите компонент Homework07 на странице
Задача 4:

Измените все импорты в проекте на пути относительно папки src (настройку baseUrl см. в файле tsconfig.json в репозитории)
Задача 3:

Установить в проект библиотеку emotion с помощью команд
npm install --save @emotion/react
npm install --save @emotion/styled
*/



import Feedback from "components/Feedback/Feedback"
import { useState } from "react";

function Homework07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const addLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <Feedback
      like={like}
      dislike={dislike}
      addLike={addLike}
      addDislike={addDislike}
      resetResults={resetResults} />
    )
}

export default Homework07
