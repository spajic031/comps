import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../Button";
function ButtonPage() {
  return (
    <div className="grid justify-items-center">
      <div>
        <Button primary>
          <GoBell className="mr-3" />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase className="mr-3" /> Buy Now
        </Button>
      </div>
      <div>
        <Button success>Hide Ads</Button>
      </div>
      <div>
        <Button warning>Save</Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
