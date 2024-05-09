import { useState } from "react";

const FormSelect = () => {
  const [forms, setForms] = useState({
    animal: 'dog'
  });
  const selectAnimal = () => {
    const selectedAnimal = forms.animal;
    setForms({...forms, name: selectedAnimal})
  }
  const handleAnimal = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value
    });
  }
  return (
    <>
      <form>
      <div>
        <label forHtml="animal">飼っている動物</label>
      </div>
      <div>
      <select id="animal" name="animal" value={forms.animal} onChange={handleAnimal} >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="bird">鳥</option>
      </select>
      </div>
      <div>
      <button 
      type="button"
      onClick={selectAnimal}
      >
        選択
        </button>
      </div>
    </form>
    <span>{ forms.name }</span>
    </>
  );
};

export default FormSelect;


// import { useState } from 'react';

// export default function FormSelect() {
//   const [form, setForm] = useState({
//     animal: 'dog'
//   });

//   const handleForm = e => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const show = () => {
//     console.log(`好きな動物：${form.animal}`);
//   };

//   return (
//     <form>
//       <label htmlFor="animal">好きな動物：</label>
//       <select id="animal" name="animal"
//         value={form.animal}
//         onChange={handleForm}>
//         <option value="dog">イヌ</option>
//         <option value="cat">ネコ</option>
//         <option value="hamster">ハムスター</option>
//         <option value="rabbit">ウサギ</option>
//       </select>
//       <button type="button" onClick={show}>送信</button>
//     </form>
//   );
// }