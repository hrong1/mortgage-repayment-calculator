import { type Data } from '../App'
import EmptyImg from '../assets/images/illustration-empty.svg?react'

interface ResultProps {
  data: Data | null;
}

interface FinalPayment {
    monthly: number | null;
    total: number | null;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

const Result = ({ data }: ResultProps) => {
    const finalPayment: FinalPayment = {
        monthly: null,
        total: null
    }
    if (data) {
        const finalRate = data.rate / 100 / 12;
        const finalTerm = data.term * 12;
        if (data.type === 'repayment') {
            const interestFactor = Math.pow(1+ finalRate, finalTerm);
            finalPayment.monthly = data.amount * ((finalRate * interestFactor) / (interestFactor - 1));
            finalPayment.total = finalPayment.monthly * finalTerm;
        } else if (data.type === 'interest')  {
            finalPayment.monthly = finalRate * data.amount;
            finalPayment.total = finalPayment.monthly * finalTerm + data.amount;
        }
    }
    return (
        <div>
            {!data ? (
                <div>
                    <EmptyImg/>
                    <h2>Results shown here</h2>
                    <p>
                        Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                    </p>
                </div>
            ):(
                <div>
                    <h2>Your results</h2>
                    <p>
                        Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
                    </p>
                    <div>
                        <span>Your monthly repayments</span>
                        {finalPayment.monthly && (<span>{formatCurrency(finalPayment.monthly)}</span>)}
                        <span>Total you'll repay over the term</span>
                        {finalPayment.total && (<span>{formatCurrency(finalPayment.total)}</span>)}
                    </div>

                </div>
            )}
        </div>
    )
}

export default Result;