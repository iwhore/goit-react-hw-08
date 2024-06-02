import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  selectContactToDelete,
  selectIsDeleteModalOpen,
} from "../../redux/contacts/selectors";
import { closeDeleteModal } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import Button from "../Button/Button";
import css from "../DeleteContactModal/DeleteContactModal.module.css";

Modal.setAppElement("#root");

export default function DeleteContactModal() {
  const dispatch = useDispatch();
  const isDeleteModalOpen = useSelector(selectIsDeleteModalOpen);
  const contactToDelete = useSelector(selectContactToDelete);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "grey",
    },
  };

  const handleCloseModal = () => {
    dispatch(closeDeleteModal());
  };

  const handleContactDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id))
        .unwrap()
        .then(() => {
          toast.success("you delated the contact");
        })
        .catch((error) => {
          console.log("handleSubmit error:", error);
          toast.error("An error occurred, try again!!!");
        });
    }

    dispatch(closeDeleteModal());
  };

  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Confirm Deletion"
      style={customStyles}
    >
      <div>
        <p className={css.text}>
          {`Are you sure you want to delete contact?`}
        </p>
        <div className={css.wrapper}>
          <Button className={css.btn} onClick={handleContactDelete}>
            Yes
          </Button>
          <Button className={css.btn} onClick={handleCloseModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
