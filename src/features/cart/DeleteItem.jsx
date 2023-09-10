import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button onClick={deleteHandler} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
