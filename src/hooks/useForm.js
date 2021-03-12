// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };

    return [value, setValue, handleChanges];
  };

export default useForm;