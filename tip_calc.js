const billInput= document.getElementById('bill_input')
const tip_pct= document.getElementById('tip')
const people= document.getElementById('number_of_people')
const tip_amt= document.getElementById('tip_per_person')
const total_amt= document.getElementById('total_per_person')
let totalPeople= Number(people.innerText)

// calculateBill() calculates tip/person and total/person 

const calculateBill= () => {

    const bill= Number(billInput.value)
    const tipAmt= (Number(tip_pct.value)/100)*bill
    const tipPerPerson= tipAmt/totalPeople
    const billPerPerson= (bill+tipAmt)/totalPeople

    tip_amt.value= tipPerPerson.toFixed(2)
    total_amt.value= billPerPerson.toFixed(2)

}

// increasePeople() increases the number of total people by one

const increasePeople= () => {

    totalPeople += 1
    people.innerText= totalPeople

    calculateBill()

}

// decreasePeople() decreases the number of people by one

const decreasePeople= () => {

    if(totalPeople <= 1){
        // totalPeople= 1
        return
    }

    totalPeople -= 1
    people.innerText= totalPeople

    calculateBill()

}

// resetAll() sets all fields to empty and number of people to one

const resetAll= () =>{
    totalPeople= 1
    document.getElementById('bill_input').value= ""
    document.getElementById('tip').value= ""
    document.getElementById('number_of_people').innerText= "1"
    document.getElementById('tip_per_person').value= ""
    document.getElementById('total_per_person').value= ""

}