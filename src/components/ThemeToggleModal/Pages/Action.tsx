interface Props {
  handleClose: VoidFunction;
  toggleTheme: VoidFunction;
}

export const Action = ({ handleClose, toggleTheme }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3>Hello, I am a modal</h3>
        <p>By clicking switch, you will toggle the mood</p>
      </div>
      <div className="modal-footer">
        <button className="secondary-button" onClick={() => handleClose()}>
          Secondary button
        </button>
        <button className="primary-button" onClick={() => toggleTheme()}>
          Toggle
        </button>
      </div>
    </div>
  );
};
