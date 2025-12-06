import { type Data } from '../App'
import EmptyImg from '../assets/images/illustration-empty.svg?react'

interface ResultProps {
  data: Data | null;
}

const Result = ({ data }: ResultProps) => {
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

                </div>
            )}
        </div>
    )
}

export default Result;