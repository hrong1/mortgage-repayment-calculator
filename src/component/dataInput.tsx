import CalculatorIcon from '../assets/images/icon-calculator.svg?react'
import { type Data } from '../App'
import './dataInput.scss'
import { useForm, type SubmitHandler} from 'react-hook-form';
import { useState } from 'react';

interface DataInputProps {
  formChange: (data: Data | null) => void;
}

const DataInput = ({ formChange }: DataInputProps) => {
    const errorEmpty = "This field is required";
    const [formKey, setFormKey] = useState(0);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Data>({
        defaultValues: {
            amount: undefined,
            term: undefined,
            rate: undefined,
            type: undefined
        },
    });
    const onSubmit: SubmitHandler<Data> = (data) => {
        formChange(data);
    };
    const handleClear = () => {
        reset();
        formChange(null);
        setFormKey(prev => prev + 1);
    }
    return (
        <form key={formKey} onSubmit={handleSubmit(onSubmit)} className="calculator" noValidate>
            <div className="calculator__header">
                <h1 className="calculator__title">Mortgage Calculator</h1>
                <button className="calculator__clear-btn" type='button' onClick={handleClear}>Clear All</button>
            </div>
            <section className="calculator__inputs">
                <div className="calculator__group">
                    <label className="calculator__label" htmlFor="amount" >Mortgage Amount</label>
                    <input 
                        className="calculator__input"
                        type="number"
                        id="amount"
                        step="0.01"
                        autoComplete="off"
                        {...register("amount", {
                            required: {
                                value: true, 
                                message: errorEmpty
                            },
                            min: {
                                value: 0.01,
                                message: "number should larger than 0"
                            },
                            valueAsNumber: true
                        })}
                    />
                    {errors.amount && <span className="calculator__error">{errors.amount.message}</span>}
                </div>
                <div className="calculator__group">
                    <label className="calculator__label" htmlFor="term">Mortgage Term</label>
                    <input
                        className="calculator__input"
                        type="number"
                        id="term"
                        min="0"
                        step="0.01"
                        autoComplete="off"
                        {...register("term", {
                            required: {
                                value: true, 
                                message: errorEmpty
                            },
                            min: {
                                value: 0.01,
                                message: "number should larger than 0"
                            },
                            valueAsNumber: true
                        })}
                    />
                    {errors.term && <span className="calculator__error">{errors.term.message}</span>}
                </div>
                <div className="calculator__group">
                    <label className="calculator__label" htmlFor="rate">Interest Rate</label>
                    <input
                        className="calculator__input"
                        type="number"
                        id="rate"
                        min="0"
                        step="0.01"
                        autoComplete="off"
                        {...register("rate", {
                            required: {
                                value: true, 
                                message: errorEmpty
                            },
                            min: {
                                value: 0.01,
                                message: "number should larger than 0"
                            },
                            valueAsNumber: true
                        })}
                    />
                    {errors.rate && <span className="calculator__error">{errors.rate.message}</span>}
                </div>
            </section>
            <fieldset className="calculator__types">
                <legend className="calculator__legend">Mortgage Type</legend>
                <div className="calculator__radio-group">
                    <input 
                        className="calculator__radio"
                        type="radio" 
                        id="repayment"
                        value="repayment"
                        {...register("type", {
                            required: errorEmpty
                        })}
                    />
                    <label className="calculator__radio-label" htmlFor="repayment">Repayment</label>
                </div>

                <div className="calculator__radio-group">
                    <input 
                        className="calculator__radio"
                        type="radio" 
                        id="interest"  
                        value="interest"
                        {...register("type", {
                            required: errorEmpty,
                        })}
                    />
                    <label className="calculator__radio-label" htmlFor="interest">Interest Only</label>
                </div>
                {errors.type && <span className="calculator__error">{errors.type.message}</span>}
            </fieldset>
            <button className="calculator__btn-submit" type='submit' disabled={isSubmitting}>
                <CalculatorIcon className="calculator__icon"/>
                Calculate Repayments
            </button>
        </form>
    )

}

export default DataInput;