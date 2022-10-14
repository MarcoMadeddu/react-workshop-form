import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface FormData{
  username: string;
  job: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({username: 'guest' , job: 'freelance'});

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
    setFormData({username: e.currentTarget.value, job: 'employee'})
  }

  return (
   <div className="container mt-2">
      <pre>{JSON.stringify(formData)}</pre>
   

      {
        /*
            NEW: This input is always in sync with formData.username
              and updates its value when you write 
            */
      }
      <input
        name="username"
        type="text"
        placeholder="Write your username"
        onChange = {onChangeHandler}
        value={formData.username}
      />
   </div>
  );
}

export default App;
