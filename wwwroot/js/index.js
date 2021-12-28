'use strict';


class SearchComponent extends React.Component {

    constructor (props) {
        super()
    }

    update(){
        /*
        var state = this.state;
        state.userList.push ({
            id : 3,
            name :  this.input.value,
            lastname :  this.input.value
        })
        this.setState( state);*/
  
    }

    render() {

        return  React.createElement(
            "input",
            {
                type : "input", 
                name : 'myInput',
                value : this.state.value ,
                onChange : () => {this.update()},
                ref : (input) => this.input = input
                },
            null
            );
    }

}



class AddUserComponent extends React.Component {

    constructor (props) {
        super()
    }

    render() {
        return  React.createElement(
            "input",
            {
                type : "input", 
                name : 'myInput',
                value : this.state.value ,
                onChange : () => {this.update()},
                ref : (input) => this.input = input
                },
            null
            );
    }

}


class UserListComponent extends React.Component {

    constructor (props) {
        super()
        this.state = props;
        //this.showAlert = this.showAlert.bind(this);
    }

    render() {

        var elementList = [];
        this.state.userList.forEach(user => {
        elementList.push(React.createElement(
            "li",
            {
                style : {color : (user.name == 'Rami')? 'red' : 'blue'} , 
                key : user.id,
                onClick : () => {/*this.showAlert(user)*/}

                },
            `HELLO ${(user.name == 'Rami')? 'Monsieur' : 'Madame'} ${user.name } ${user.lastname } !`))
        });
        return  React.createElement(
            "ul",
            null, 
            elementList,
            );
    }

}

class MainBlock extends React.Component {

    constructor (props) {
        super()
        this.state = props;
        //this.showAlert = this.showAlert.bind(this);
    }
    render() {
        return React.createElement(
            "div",
            null, 
            React.createElement(UserListComponent,this.props,null),
            React.createElement(AddUserComponent,{},null)
            );
    } 
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(MainBlock, {userList : [{id : 1, name: 'Rami', lastname : 'Nouaili'},{id : 2 , name: 'Zeineb', lastname : 'Zoghlami'}]},'text'), domContainer);