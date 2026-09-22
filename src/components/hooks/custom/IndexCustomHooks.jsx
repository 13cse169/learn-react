import { UserProvider } from "../../../context/UserContext";
import CustomHookContext from "./CustomHookContext"
import ExampleOne from "./ExampleOne"
import ExampleTow from "./ExampleTow"

const IndexCustomHooks = () => {
  return (
    <div>
        <h1>IndexCustomHooks</h1>
        <UserProvider>
            <CustomHookContext/>
        </UserProvider>
        <ExampleTow/>
        <ExampleOne/>
    </div>
  )
}

export default IndexCustomHooks