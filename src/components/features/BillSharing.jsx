import { useState } from "react";
import AppButton from "../shared/AppButton";
import AppInputGroup from "../shared/AppInputGroup";

export default function BillSharing({ data, sharingFn }) {

    const [billInfo, setBillInfo] = useState({
        billAmount: 0,
        myAmount: 0,
        myFriendAmount: 0,
        payee: 'you'
    })

    function changeBillAmount(amount) {
        let myFriendAmount = 0, myAmount = billInfo.myAmount;
        if (amount >= 0) {
            if (myAmount > 0) {
                myFriendAmount = amount - myAmount
            }
            setBillInfo(curr => {
                return {
                    ...curr,
                    billAmount: amount,
                    myFriendAmount: myFriendAmount
                }
            })
        }
    }

    function changeMyAmount(amount) {
        const billAmount = billInfo.billAmount
        if (amount >= 0 && amount <= billAmount) {
            setBillInfo(curr => {
                return {
                    ...curr,
                    myAmount: amount,
                    myFriendAmount: (billAmount - amount)
                }
            })
        }
    }

    function changePayee(event) {
        const { value } = event.target
        setBillInfo(curr => {
            return { ...curr, payee: value }
        })
    }

    function splitBill(event) {
        event.preventDefault();
        let {billAmount, payee, myAmount, myFriendAmount } = billInfo

        if ((myAmount < myFriendAmount) && payee == "you")
            return

        if ((myFriendAmount < myAmount) && payee !== "you")
            return

        if (billInfo.payee !== "you") {
            sharingFn(data.id, -myFriendAmount)
        } else {
            if (myAmount == billAmount)
                myFriendAmount = myAmount
            sharingFn(data.id, myFriendAmount)
        }
    }

    return (
        <form className="form-split-bill" onSubmit={splitBill}>
            <h2>split a bill with {data.name}</h2>

            <AppInputGroup
                text="Bill value"
                type="number"
                id="billValue"
                value={billInfo.billAmount}
                changeFn={changeBillAmount} />

            <AppInputGroup
                text="Your expense"
                type="number"
                id="yourExpense"
                value={billInfo.myAmount}
                changeFn={changeMyAmount} />

            <AppInputGroup
                text={`${data.name}'s expense`}
                type="number"
                id="friendExpense"
                disable={true}
                value={billInfo.myFriendAmount} />

            <label htmlFor="selectPayee">Who is paying the bill?</label>
            <select name="selectPayee" id="selectPayee" onChange={changePayee}>
                <option value="you">You</option>
                <option value={data.name}>{data.name}</option>
            </select>

            <AppButton type="submit" text="Split bill" />
        </form>
    )
}