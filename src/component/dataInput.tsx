const DataInput = () => {
    const errorText = "This field is required"
    
    return (
        <form>
            <h1>Mortgage Calculator</h1>
            <button type='button'>Clear All</button>
            <section>
                <div>
                    <label>Mortgage Amount</label>
                    <input></input>
                    <span>{errorText}</span>
                </div>
                <div>
                    <label>Mortgage Term</label>
                    <input></input>
                    <span>{errorText}</span>
                </div>
                <div>
                    <label>Interest Rate</label>
                    <input></input>
                    <span>{errorText}</span>
                </div>
            </section>
            <fieldset>
                <legend>Mortgage Type</legend>
                <div>
                    <input type="radio" id="repayment" name="drone" value="repayment"/>
                    <label htmlFor="repayment">Repayment</label>
                </div>

                <div>
                    <input type="radio" id="interest" name="drone" value="interest"/>
                    <label htmlFor="interest">Interest Only</label>
                </div>
                <span>{errorText}</span>
            </fieldset>
            <button type='submit'>Calculate Repayments</button>
        </form>
    )

}

export default DataInput;