import React, { Component } from 'react';
import ExpenseList from '../components/ExpenseList';

class Pg2 extends Component{
  constructor(props){
    super(props)

    this.state = {
      exList: [
        {
          expense: "Tacos",
          amount: "2.50"
        }
      ],
    };

    this.addExpense = this.addExpense.bind(this);
    this.changeExpense = this.changeExpense.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  // componentWillMount(){
  //   if(localStorage.getItem("expField") && localStorage.getItem("amtField")){
  //     let currExp = document.querySelector(".currExp article ul");
  //     this.setState({currExp: currExp});
  //   }
  // }

  componentDidMount(){
    if(localStorage.getItem("expField") && localStorage.getItem("amtField")){
      let exList = this.state.exList;
      this.setState({exList: exList});
    }
  }

  componentWillUpdate(nextProps, nextState){
    let expField = document.querySelector("#expField").value;
    let amtField = document.querySelector("#amtField").value;
    localStorage.setItem("expField", expField);
    localStorage.setItem("amtField", amtField);
  }

  changeExpense(e){
    e.preventDefault();
    this.setState({expense: e.target.value});
  }

  changeAmount(e){
    e.preventDefault();
    let amountInput = e.target.value;
    amountInput = parseFloat(amountInput).toFixed(2);
    this.setState({amount: amountInput});
  }

  addExpense(e){
    e.preventDefault();
    let exList = this.state.exList;
    if(exList === null){
      alert("Please enter a name");
      return false;
    }

    if(this.state.amount === 0){
      alert("Please a valid number");
      return false;
    }

    if(isNaN(this.state.amount)){
      alert("The amount must be a number");
      return false;
    }

    this.state.exList.push({"expense": this.state.expense, "amount": this.state.amount});
    this.setState({exList: this.state.exList});
  }

  removeExpense(key){
    let exList = this.state.exList;
    this.state.exList.splice(key, 1);
    this.setState({exList: this.state.exList});
    localStorage.setItem("exList", JSON.stringify(exList));
  }

  render(){
    let myExpenses = this.state.exList.map((val, key) => {
      return <ExpenseList val={val} key={key} id={key} delMe={()=>this.removeExpense(key)}/>
    });

    return(
      <main className="ContactList">
        <section className="add">
          <h2>Add new expense</h2>

          <form name="myForm">
            <label>Expense</label>
            <input id="expField" type="text" name="expense" onChange={this.changeExpense}/>

            <label>Amount</label>
            <input id="amtField" type="text" name="amount" onChange={this.changeAmount}/>

            <button type="submit" className="btn" onClick={this.addExpense}>Add</button>
          </form>
        </section>

        <section className="currExp">
          <h2>Current Expenses</h2>

          <article className="contentScroll">
            <ul className="expenseCont">{myExpenses}</ul>
          </article>
        </section>
      </main>
    )
  }
}

export default Pg2;
