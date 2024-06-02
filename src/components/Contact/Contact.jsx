import { MdOutlineLocalPhone } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openDeleteModal, openEditModal } from "../../redux/contacts/slice";
import Button from "../Button/Button";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleOpenDeleteModal = () => {
    dispatch(openDeleteModal(contact));
  };

  const handleOpenEditModal = () => {
    dispatch(openEditModal(contact));
  };

  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPersonOutline /> {contact.name}
        </p>
        <p>
          <MdOutlineLocalPhone /> {contact.number}
        </p>
      </div>
      <div className={css.wrapper}>
        <Button type="button" onClick={handleOpenEditModal}>
          <FaPen />
        </Button>
        <Button type="button" onClick={handleOpenDeleteModal}>
          <FiTrash2 />
        </Button>
      </div>
    </div>
  );
}
