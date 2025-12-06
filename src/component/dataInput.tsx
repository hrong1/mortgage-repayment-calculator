import CalculatorIcon from '../assets/images/icon-calculator.svg?react'
import { type Data } from '../App'
import { useForm, type SubmitHandler } from 'react-hook-form';

interface DataInputProps {
  submitForm: (data: Data) => void;
}

const DataInput = ({ submitForm }: DataInputProps) => {
    const errorEmpty = "This field is required";
    const { register, handleSubmit, formState: { errors } } = useForm<Data>();
    const onSubmit: SubmitHandler<Data> = (data) => {
        submitForm(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Mortgage Calculator</h1>
            <button type='button'>Clear All</button>
            <section>
                <div>
                    <label>Mortgage Amount</label>
                    <input 
                        {...register("amount", {
                            required: errorEmpty,
                        })}
                        >  
                    </input>
                    {errors.amount && <span>{errors.amount.message}</span>}
                </div>
                <div>
                    <label>Mortgage Term</label>
                    <input
                        {...register("amount", {
                            required: errorEmpty,
                        })}
                        >
                    </input>
                    {errors.term && <span>{errors.term.message}</span>}
                </div>
                <div>
                    <label>Interest Rate</label>
                    <input
                        {...register("amount", {
                            required: errorEmpty,
                        })}
                        >
                    </input>
                    {errors.rate && <span>{errors.rate.message}</span>}
                </div>
            </section>
            <fieldset>
                <legend>Mortgage Type</legend>
                <div>
                    <input 
                        type="radio" 
                        id="repayment"
                        value="repayment"
                        {...register("type", {
                            required: errorEmpty,
                        })}/>
                    <label htmlFor="repayment">Repayment</label>
                </div>

                <div>
                    <input 
                        type="radio" 
                        id="interest"  
                        value="interest"
                        {...register("type", {
                            required: errorEmpty,
                        })}/>
                    <label htmlFor="interest">Interest Only</label>
                </div>
                {errors.type && <span>{errors.type.message}</span>}
            </fieldset>
            <button type='submit'>
                <CalculatorIcon/>
                Calculate Repayments
            </button>
        </form>
    )

}

export default DataInput;