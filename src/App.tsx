import { useState } from 'react';
import './App.scss'
import DataInput from './component/dataInput'
import Result from './component/result';

export interface Data {
  amount: number;
  term: number;
  rate: number;
  type: string;
}


function App() {
  const [submittedData, setSubmittedData] = useState<Data | null>(null);

  const formDataChange = (data: Data | null) => {
    setSubmittedData(data);
  };

  return (
    <main>
      <DataInput formChange={formDataChange}/>
      <Result data={submittedData}/>
    </main>
  )
}

export default App
