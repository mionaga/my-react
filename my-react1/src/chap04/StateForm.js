import { useState } from "react";

const StateForm = () => {
  const [form, setForm] = useState({
    name: "Tom Bake",
    age: 25
  });
  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const show = () => {
    const message = `おはよう！${form.name}(${form.age})さん`;
    setMessage(message);
  };

  return (
    <>
    <form>
      <div key={form.name}>
        <label htmlFor="name">名前</label>
        <input 
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={form.name}
        />
      </div>
      <div key={form.age}>
        <label htmlFor="age">年齢</label>
        <input 
        type="number"
        id="age"
        name="age"
        onChange={handleChange}
        value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
    </form>
    <span>{message}</span>
    </>
  );
};

export default StateForm;
// import { useState } from 'react';

// export default function StateForm() {
//   const [form, setForm] = useState({
//     name: '山田太郎',
//     age: 18
//   });

//   const handleForm = e => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const show = () => {
//     console.log(`こんにちは、${form.name}（${form.age} 歳）さん！`);
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="name">名前：</label>
//         <input id="name" name="name" type="text"
//           onChange={handleForm} value={form.name} />
//       </div>
//       <div>
//         <label htmlFor="age">年齢：</label>
//         <input id="age" name="age" type="number"
//           onChange={handleForm} value={form.age} />
//       </div>
//       <div>
//         <button type="button" onClick={show}>
//           送信</button>
//       </div>
//       <p>こんにちは、{form.name}（{form.age} 歳）さん！</p>
//     </form>
//   );
// }