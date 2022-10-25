import React, { useReducer } from 'react';
import personReducer from './person-reducer';

const initPersion = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}
const UPDATE = 'updated';
const DELETE = 'deleted';
const ADD = 'added';

// const personRuducer = (person, action) => {
//   const { name, title } = action;
//   console.log(action, name, title);

//   switch (action.type) {
//     case UPDATE:{
//      return {
//         ...person,
//         mentors: person.mentors.map(mentor => {
//           if (mentor.name == name) return { ...mentor, name }
//           return mentor;
//         }),
//       };
//     }
//     case DELETE:
//       return {
//         ...person,
//         mentors: person.mentors.filter(m => m.name != name),
//       };
//     case ADD:
//       return {
//         ...person,
//         mentors: [...person.mentors, { name, title }]
//       };
//     default:
//       console.log(action.log);
//       return person;
//   }
// }
export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initPersion);

  const handleOnChange = () => {
    const name = prompt(`Old name`);
    const title = prompt(`New name`);
    dispatch({ type: UPDATE, name, title })
  }

  const handleOnDelete = () => {
    const name = prompt(`Select name`);
    dispatch({ type: DELETE, name });
  }

  const handleOnAdd = () => {
    const name = prompt(`Add name?`);
    if (name == undefined) {
      return;
    }
    const title = prompt(`Add role?`);
    dispatch({ type: ADD, name, title })
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleOnChange}>멘토의 이름을 바꾸기 </button>
      <button onClick={handleOnDelete} >멘토 삭제하기</button>
      <button onClick={handleOnAdd} >멘토 추가하기</button>
    </div>
  );
}
