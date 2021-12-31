'use strict';

/**
 * Class Search component
 */
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
                onChange : () => {this.props.update(this.input.value)},
                ref : (input) => this.input = input
            },
            null
         );
    }   
}



class AddUserComponent extends React.Component {

    constructor (props) {
        super()
        console.log(this.props)
    }

    render() {
        return  React.createElement(
            'div',
            null,
            React.createElement(
                "input",
                {
                    type : "input", 
                    name : 'nameInput',
                    //value : '',
                    ref : (input) => this.nameInput = input
                    },
                null
            ),
            React.createElement(
                "input",
                {
                    type : "input", 
                    name : 'lastnameInput',
                    //value : '',
                    ref : (input) => this.lastnameInput = input
                    },
                null
            ),
            React.createElement(
                "button",
                {
                    type : "submit", 
                    onClick : (e) => {
                        this.props.doAdd({
                            name : this.nameInput.value,
                            lastname : this.lastnameInput.value

                        })
                    }
                },
                'Ajouter une personne'
            )
        );
    }

}


class UserListComponent extends React.Component {

    constructor (props) {
        super()
        console.log(props)
        let myObject = {
            userList : props.userList,
            query : props.query
        }
        this.state = props;
                //this.showAlert = this.showAlert.bind(this);
    }
    
    render() {

        var elementList = [];
        console.log(this.state)
        elementList = this.state.userList
            .filter((user) =>{

                if( this.state.query === undefined || this.state.query === "" || this.state.query == user.name||this.state.query == user.lastname){
                    console.log('in')
                    console.log(user)
                    return user;
                }
                console.log('out')
                console.log(user)
            })
            .map((user, i) => {
                retur (React.createElement(
                    "li",
                    {
                        style : {color : (user.name == 'Rami')? 'red' : 'blue'} , 
                        key : i,
                        onClick : (e) => {
                            alert(i);
                        }
                    },
            `HELLO ${(user.name == 'Rami')? 'Monsieur' : 'Madame'} ${user.name } ${user.lastname } !`))
        });
        return  React.createElement(
            "ol",
            null, 
            elementList,
            );
    }

}

class MainBlock extends React.Component {

    constructor (props) {
        super()
        let myObject = {
            userList : props.userList,
            query : props.query
        }
        this.state = myObject;
        //this.state.query = "";
    }
    update(query){
        this.setState({query : query})
        console.log("_update(query)")
        console.log(this.state)
    }

    doAdd(user){
        console.log(user)
        var userList = this.state.userList
        userList.push({name : user.name, lastname : user.lastname})
        this.setState(userList)
    }

    render() {

        var elementList = [];
        console.log(this.state)
        elementList =  this.state.userList
            .filter((user) =>{

                if( this.state.query === undefined || this.state.query === "" || this.state.query.toUpperCase() == user.name.substr(0, this.state.query.length).toUpperCase()|| this.state.query.toUpperCase() == user.lastname.substr(0, this.state.query.length).toUpperCase()){
                    console.log('in')
                    console.log(user)
                    return user;
                }
                console.log('out')
                console.log(user)
            })
            .map((user, i) => {
                return React.createElement(
                    "li",
                    {
                        style : {color : (user.name == 'Rami')? 'red' : 'blue'} , 
                        key : i,
                        onClick : (e) => {   alert(i); }
                    },
                    `HELLO ${(user.name == 'Rami')? 'Monsieur' : 'Madame'} ${user.name } ${user.lastname } !`
                    )
        });

        return React.createElement(
            "div",
            null, 
            React.createElement(SearchComponent,
                {
                    update :  (x) => this.update(x)
                },
                null),
            React.createElement( "ol",  null,    elementList),
            React.createElement(AddUserComponent,
                {
                    doAdd :  (x) => this.doAdd(x)
                },
                null),
            );
    } 
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(MainBlock, {query : '', userList : [{id : 1, name: 'Rami', lastname : 'Nouaili'},{id : 2 , name: 'Zeineb', lastname : 'Zoghlami'}]},'text'), domContainer);