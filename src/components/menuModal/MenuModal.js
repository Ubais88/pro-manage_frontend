import React, { useState } from "react";
import styles from "./MenuModal.module.css";
import LogoutModal from "../../pages/logoutModal/LogoutModal";
import handleShareClick from "../../utils/clipboardUtils.js";
import CreateChecklist from "../../pages/addChecklistModal/CreateChecklist.js";

const MenuModal = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const handleClick = () => {
    handleShareClick("shareQuizId")
  }
  
  return (
    <div className={styles.logoutModalContainer}>
      <div className={styles.btnContainer}>
        <div className={styles.edit} onClick={() => setEditModalOpen(true)}>Edit</div>
        <div className={styles.share} onClick={handleClick}>Share</div>
        <div className={styles.delete} onClick={() => setModalOpen(true)}>Delete</div>
      </div>
      {
        modalOpen && (
        <LogoutModal title={"Delete"} setModalOpen={setModalOpen} />
      )
      }
      {
        editModalOpen && ( <CreateChecklist setEditModalOpen={setEditModalOpen} /> )
      }
    </div>
  );
};

export default MenuModal;
