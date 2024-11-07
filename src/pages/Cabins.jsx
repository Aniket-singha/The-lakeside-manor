
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/cabinTableOperations";
  
function Cabins(){
  return (
    <>
    {/* <Heading as="h1">All cabins</Heading> */}
    <Row type="horizontal">
      <CabinTableOperations/>
    </Row>
    <Row>
      <CabinTable/>
    </Row>
    <Row>
      <AddCabin/>
    </Row>
    </>
  );
}

export default Cabins;
