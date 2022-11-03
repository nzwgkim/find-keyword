import React from "react";
import { useImmer } from "use-immer";

const initPersion = {
  name: "Woody",
  title: "Job-finder",
  mentors: [
    {
      name: "Lucas",
      title: "Senior",
    },
    {
      name: "A",
      title: "tester",
    },
  ],
};

export default function App() {
  const [person, updatePerson] = useImmer(initPersion);
  // const [person, setPerson] = useState(initPersion);

  const handleOnChange = () => {
    const prev = prompt(`Select mentos'name to be changed?`);
    const current = prompt(`Enter new name`);
    if (prev === undefined && current === undefined) {
      return;
    }
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if (mentor.name == prev) return { ...mentor, name: current };
    //     return mentor;
    //   })
    // }));
    console.log("Change:", person.mentors);
  };

  const handleOnDelete = () => {
    const name = prompt(`Find the mentor's name to be deleted`);
    if (name === undefined) {
      return;
    }
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((m) => m.name != name)
    // }));
    console.log("Delete:", person.mentors);
  };

  const handleOnAdd = () => {
    const name = prompt(`Add name?`);
    if (name === undefined) {
      return;
    }
    const title = prompt(`Add role?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: [...person.mentors, { name, title }]
    // }));
    console.log("Add:", person.mentors);
  };

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
      <button onClick={handleOnDelete}>멘토 삭제하기</button>
      <button onClick={handleOnAdd}>멘토 추가하기</button>
    </div>
  );
}
