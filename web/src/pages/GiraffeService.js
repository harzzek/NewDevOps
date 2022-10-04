import {giraffeStore} from "./GiraffeStore";
import Button from "@mui/material/Button";


function GiraffeService()
{
    return(
        <div>
            <Button onClick={()=>giraffeStore.addGiraffe("Elmer")}>Tilføj giraf</Button>
            <ul>
                {giraffeStore.giraffes.map((giraffeName,key)=>
                    <li key={key}>{giraffeName}</li>
                )}
            </ul>
        </div>
    )
}

export default GiraffeService;