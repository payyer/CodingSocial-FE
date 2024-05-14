import { ReactNode } from "react";

interface ICustomModal {
  url?: string;
  child?: ReactNode | string;
  keyOpenModal: string;
}

function CustomModal({ child, keyOpenModal, url }: ICustomModal) {
  return (
    <>
      <input type="checkbox" id={keyOpenModal} className="modal-toggle" />
      <div className="modal w-full" role="dialog">
        <div className="modal-box">
          {child ? (
            <>{child}</>
          ) : (
            <img className="w-full h-full object-contain" src={url} alt="" />
          )}
        </div>

        <label className="modal-backdrop" htmlFor={keyOpenModal}>
          Close
        </label>
      </div>
    </>
  );
}

export default CustomModal;
