import React, {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(value);
    // e.preventDefault();
  }
  
  return {value, onChange};
};

const App = () => {
  const name = useInput("");
  console.log({...name});
  // console.log(name.value);
  return (
    <div>
      <form placeholder="Name" {...name} />
      
    </div>
    
  );
}


export default App;
