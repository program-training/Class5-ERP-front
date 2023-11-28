import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";

const useActionPending = () => {
  const dispatch = useAppDispatch();
  return () =>
    dispatch(
      setAlert({
        open: true,
        title: "info",
        message: "loads the request",
        allowAccessProductPage: false,
      })
    );
};
export default useActionPending;
