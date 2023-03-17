import Button from '../components/Button';
import { GoBell, GoCloudDownload,GoLightBulb } from "react-icons/go";

function ButtonPage (){
    return <div>
        <Button primary outlined rounded >
            <GoBell />
            Click Me!
        </Button>
        <Button warning >
            <GoCloudDownload/>
            No
        </Button>
        <Button danger outlined>
            <GoBell/>
            No
        </Button>
        <Button secondary>
            <GoLightBulb/>
            No
        </Button>
        <Button primary rounded>
            <GoCloudDownload/>
            No
        </Button>
    </div>
}
export default ButtonPage;