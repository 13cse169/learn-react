import Lists from "../Lists";
import MyForm from "../MyForm"
import ProductInfo from "../ProductInfo";
import UserList from "../destructuring/UserList";
import Person from "../destructuring/Person";
import Card from "../Card";
import Cart from "../conditionalRendering/Cart";
import Weather from "../conditionalRendering/Weather";
import UserStatus from "../conditionalRendering/UserStatus";
import InlineStyle from "../styles/InlineStyle";
import ExternalCss from "../styles/ExternalCss";

const Main = () => {

    const myName = "Birendra Singh";
    const multiply = (a, b) => a * b;
    const specialClass = "anything-i-want";
    const crDate = new Date();

    return (
        <main>
            <ExternalCss/>
            <InlineStyle/>

            <UserStatus loggedIn={true} isAdmin={true}/>
            <hr/>

            <Weather temp={23}/>
            <Weather temp={12}/>
            <Weather temp={34}/>
            <hr/>

            <Cart/>
            <Password isValid={true}/>
            <hr/>

            <Card>
                <h1>My Card 1</h1>
                <p>This is card description.....</p>
            </Card>
            <Card>
                <h1>My Card 2</h1>
                <p>This is card description.....</p>
            </Card>

            <Person name="Birendra Singh" age="30" />
            <User name="Birendra Singh" age="32" isMarried={false} hobbies={['Coding', 'Reading']}/>
            <UserList/>
            <Lists/>
            <ProductInfo/>
            
            <p>Date: {crDate.getDate()}</p>
            <MyForm/>
            <p className={specialClass}>This is special Class</p>

            <hr />
            
            <p>5 + 6 = {multiply(5, 6)}</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>My name is {myName}</p>

            <hr />
            
            <p>This is the main content.</p>
            <h2>Main</h2>
        </main>
    )
}

const User = (props) => {
  return <section>
    <h4>Name: {props.name}</h4>
    <h4>Age: {props.age}</h4>
    <h4>Is Married: {props.isMarried}</h4>
    <h4>Hobbies: {props.hobbies}</h4>
    <hr />
  </section>;
}

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {
    return isValid ? <ValidPassword/> : <InvalidPassword/>;
}

export default Main