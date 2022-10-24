import React, { useState } from 'react';

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

export default function AppMentor() {
  const [person, setPerson] = useState(initPersion);


  const handleOnChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    // console.log(prev);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // console.log(current);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map(mentor => {
        if (mentor.name == prev) return { ...mentor, name: current }
        return mentor;
      })
    }));

    console.log(person.mentors);
  }

  const handleOnDelete = () => {
    const name = prompt(`누구의 이름을 삭제 싶은가요?`);
    // console.log(current);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(m=>m.name!=name),
      }));
  }

  
  const handleOnAdd = () => {
    const name = prompt(`Add name?`);
    if(name==undefined){
      return;
    }
    const title = prompt(`Add role?`);
    // console.log(current);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, {name,title}]
    }));

    console.log(person.mentors);
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
