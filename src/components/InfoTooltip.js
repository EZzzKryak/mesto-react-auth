import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";
import authStatusFailed from "../images/popup__auth-failed.svg";
import authStatusSuccess from "../images/popup__auth-success.svg";

const InfoTooltip = ({ isOpen, onClose, authStatus }) => {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup popup_type_tooltip ${isOpen && " popup_opened"}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="popup__img-tooltip"
          src={authStatus ? authStatusSuccess : authStatusFailed}
          alt="Иконка статуса регистрации"
        />
        <h2 className="popup__title">
          {authStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
